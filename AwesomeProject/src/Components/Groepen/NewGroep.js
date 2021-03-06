import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput, FlatList, ScrollView, AsyncStorage, KeyboardAvoidingView, Picker, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {List, ListItem, SearchBar} from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';
import Groepdes from './Groepdes';
import Groepen from '../Groepen/Groepen';
import I18n from 'react-native-i18n';

const util = require('util');

export default class NewGroep extends React.Component {
  
  static navigationOptions = {
    title: 'NewGroep',
    headerStyle: {marginTop: -100}
  };
  
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.navigation.state.params.username,
      groupname: '',
      rekening: '',
      currency: '',
      currencyFull: '',
      vrienden: [],
      selectedVrienden: []
    }
  }
  
  componentWillMount() {
    this.ToonVrienden();
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedVrienden });
  };

  updateCurrency = (selectedCurrency) => {

    if (selectedCurrency == 'Euro') {
      this.state.currency = 'EUR';
      this.setState({ currencyFull: "Euro" });
      alert(this.state.currency);
    } else if (selectedCurrency == 'Dollar') {
      this.state.currency = 'USD';
      this.setState({ currencyFull: "Dollar" });
      alert(this.state.currency);      
    } else if (selectedCurrency == 'Pound') {
      this.state.currency = 'GBP';
      this.setState({ currencyFull: "Pound" });
      alert(this.state.currency);      
    } else {
      alert('currency error');
    }

  }
  
  ToonVrienden = () => {
    if (AsyncStorage.getItem(this.state.username)) {
      AsyncStorage.getItem(this.state.username)
      .then((value) => {
        let userData = JSON.parse(value);
        if(userData == null) {
          alert("Er is een probleem met de actieve gebruiker.");
        }
        const vrienden = userData.Vrienden;
        console.log(vrienden);
        if(vrienden[0] != null) {
          this.setState({vrienden: vrienden});
        }
      });
    }
  }

  GroupRegistrationFunction = () => {
    let newGroup = {
      Groupname: this.state.groupname,
      Rekening: this.state.rekening,
      Currency: this.state.currency,
      Vrienden: this.state.vrienden   
    };
    if(this.state.groupname == '') {
      alert("Geen groepsnaam opgegeven.");
    }
    else {
      AsyncStorage.getItem(this.state.groupname)
      .then((value) => {
        const data = JSON.parse(value);
        if (data == null) {
          AsyncStorage.setItem(newGroup.Groupname, JSON.stringify(newGroup));
          this.addGroep();
        }
        else {
          alert('Groupname already exists');
        }
      });
    }
  }

  addGroep = () =>{
    if (AsyncStorage.getItem(this.state.groupname)) {
      AsyncStorage.getItem(this.state.groupname)
      .then((value) => {
        const data = JSON.parse(value);
        if(data == null) {
          alert("Deze groep bestaat niet.");
        }
        else {
          let activeUser = this.state.username;
          AsyncStorage.getItem(activeUser).then((value) => {
            const data3 = JSON.parse(value);
            const user = data3;
            let checkExists = false;
            for (const group of user.Groepen) {
              if(group.Groupname == this.state.groupname) {
                alert("Deze groep bestaat al");
                checkExists = true;
              }
            }
            if(!checkExists) {
              user.Groepen.push(data);
              AsyncStorage.setItem(activeUser, JSON.stringify(data3), () => {
                AsyncStorage.mergeItem(activeUser, JSON.stringify(user), () => {
                  AsyncStorage.getItem(activeUser, (err, result) => {
                    console.log(result);                
                  });
                });
              });
              this.props.navigation.navigate("Groep", {});
            }
          })
        }          
      }); 
    }      
  }        

  addFriendToGroupFunction = (vriend) =>{
    alert(vriend);
    let newFriend = {
        name: this.state.username,    
    };
    if(this.state.groupname == ''){
      alert("Geen groepsnaam opgegeven.");
    }
    else{
      AsyncStorage.getItem(this.state.groupname)
      .then((value) => {
        const data = JSON.parse(value);
        if (data == null) {
          AsyncStorage.setItem(newGroup.Groupname, JSON.stringify(newGroup));
          this.addGroep();
          
      }
        else {
          alert('Groupname already exists');
        }
        
          this.setState({ 
            vrienden: this.state.vrienden.concat([vriend])
          })
          data.Vrienden = this.state.vrienden;
      });
    } 

  }
  renderHeader = () => {
    return <SearchBar onBlur={this.addFriendToGroupFunction()} placeholder="Search user" lightTheme onChangeText={this.searchText} containerStyle={{backgroundColor: '#e2e8e5'}} inputStyle={{backgroundColor: '#e2e8e5'}}/>
}

searchText = (e) => {
    const text = e.toLowerCase();
    const data = this.state.vrienden;
    const filteredName = data.filter((item) => {
      return item.Username.toLowerCase().match(text)
    });
    if (!text || text === '') {
      this.setState({
        vrienden: this.state.vrienden
      });
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      this.setState({
        vrienden: []
      });
    } else if (Array.isArray(filteredName)) {
      this.setState({
        vrienden: filteredName
      });
    }
}

  render() {
      var { navigate } = this.props.navigation;
      const { selectedVrienden } = this.state;
      return (
          <View style={styles.container}>
            <Text style={styles.labels2}>Groepsnaam</Text>
            <TextInput style={styles.input}
              placeholder="Groepsnaam"
              placeholderTextColor='#e2e8e5'
              underlineColorAndroid="transparent"
              onChangeText={(groupname) => this.setState({groupname})}
            />
            <Text style={styles.labels}> Vrienden</Text>
            <View style={styles.friendList}>
            <List automaticallyAdjustContentInsets={false}>
                <FlatList
                    data={this.state.vrienden}
                    renderItem={({item}) => (
                        <ListItem
                            containerStyle={{borderBottomColor: '#4d9280'}}
                            roundAvatar
                            title={item.Username}
                            subtitle={item.Email}
                            avatar={{uri: 'http://www.freeiconspng.com/uploads/profile-icon-9.png'}}
                            />
                    )}
                    keyExtractor={item => item.Username}
                    ListHeaderComponent={this.renderHeader}
                />
            </List>
        </View>
            
            <Text style={styles.labels}> Currencies</Text>
            <Picker selectedValue={this.state.currencyFull} onValueChange={this.updateCurrency} style={styles.picker}>
              <Picker.Item label="Euro" value="Euro" />
              <Picker.Item label="Dollar" value="Dollar" />
              <Picker.Item label="Pound" value="Pound" />
            </Picker>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.GroupRegistrationFunction}>
              <Text style={styles.buttonText}>Maak groep</Text></TouchableOpacity>
          </View >
      );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#4d9280',
  alignItems: 'center',
  
},
labels: {
    marginTop: 5,
    marginBottom: 5,
    width: '80%',
    color: '#e2e8e5'
},
labels2: {
  marginTop: 100,
  marginBottom: 5,
  width: '80%',
  color: '#e2e8e5'
},
input: {
  height: 40,
  backgroundColor: 'rgba(255,255,255,0.3)',
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#e2e8e5',
  color: '#e2e8e5',
  width: '80%'
},
buttonContainer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 50,
  width: '100%',
  backgroundColor: '#e2e8e5',
  paddingVertical: 25,
  height: '15%'
},
buttonText: {
  textAlign: 'center',
  color: '#4d9280',
  fontSize: 25
},
picker: {
  width: '80%',
  backgroundColor: 'rgba(255,255,255,0.3)',
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#e2e8e5',
  color: '#e2e8e5',
  paddingVertical: 10,
  alignItems: 'center'
},
friendList: {
  width: '80%',
  height: '30%',
  marginTop: '-6%'
}
});
  /*constructor(props) {
    super(props);
    this.state = {groupname: ''}
  }



  render() {

    
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Nieuwe Groep</Text>

        <TextInput placeholder="Groepsnaam"
          placeholderTextColor='#3d7ca9'
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(groupname) => this.setState({ groupname })}
        />


        <TouchableOpacity style={styles.addGroup} onPress={this.addGroep.bind(this)}>
          <Text style={styles.addGroupText}>Aanmaken</Text>
        </TouchableOpacity>

      </View>
    );
  }

  addGroep() {
    if(this.state.groupname == ''){
      alert('Geen groepnaam ingevuld')
    }
    else{
    this.props.navigation.navigate('Groep', {groupname: this.state.groupname})
  }
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#659ec7',
  },
  Title: {
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 25,
    fontSize: 50
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '80%',
    marginLeft: '10%'
  },
  addGroup: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#245611',
    paddingVertical: 25,
    height: 75,
  },
  addGroupText: {
    textAlign: 'center',
    color: 'white'
  }
});*/