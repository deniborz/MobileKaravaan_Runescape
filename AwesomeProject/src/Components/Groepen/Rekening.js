import React from 'react';
import { StyleSheet, Text, Image, View, Picker, Button, Alert, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';

import I18n from 'react-native-i18n';

import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      groupname: this.props.navigation.state.params.groupname,
      name: '',
      vrienden: [],
      currency: '',
      date: '',
      wayOfSplit: '',
      bedrag: ''
    }
  }
  
  static navigationOptions = {
    title: 'Rekening',
    //headerStyle: {marginTop: -100}
  };

  componentWillMount() {
    if (AsyncStorage.getItem(this.state.username)) {
      AsyncStorage.getItem(this.state.username)
        .then((value) => {
          const userData = JSON.parse(value);
          this.setState({ currency: userData.Currency });
          if (this.state.currency == 'EUR') {
            this.setState({ currencyFull: "Euro" });
          } else if (this.state.currency == 'USD') {
            this.setState({ currencyFull: "Dollar"})
          } else if (this.state.currency == 'GBP') {
            this.setState({ currencyFull: "Pound"})
          } else {
            alert('fout');
          }
      });
    }
  }
  
  setCurrency = (currency) => {
    if (AsyncStorage.getItem(this.state.username)) {
      AsyncStorage.getItem(this.state.username)
        .then((value) => {
          const userData = JSON.parse(value);
          const activeUser = userData;
          if (currency == 'Euro') {
            activeUser.Currency = 'EUR';
            this.setState({ currency: activeUser.Currency });
            this.setState({ currencyFull: "Euro" });  
          } else if (currency == 'Dollar') {
            activeUser.Currency = 'USD';
            this.setState({ currency: activeUser.Currency });
            this.setState({ currencyFull: "Dollar" });
          } else if (currency == 'Pound') {
            activeUser.Currency = 'GBP';
            this.setState({ currency: activeUser.Currency });
            this.setState({ currencyFull: "Pound" });
          } else {
            alert('currency error');
          }

          AsyncStorage.setItem(activeUser.Username, JSON.stringify(userData), () => {
            AsyncStorage.mergeItem(activeUser.Username, JSON.stringify(activeUser), () => {
            });
          });
        });
    }
  }

  setWayOfSplit = (wayOfSplit) => {
    this.setState({ wayOfSplit: wayOfSplit });
  }

  GroupRegistrationFunction = () =>{
    let newGroup = {
        Groupname: this.state.groupname,
        Rekening: this.state.rekening,
        Currency: this.state.currency,
        Vrienden: this.state.vrienden
        
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
                  AsyncStorage.getItem(activeUser).then((value) =>
                  {
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
                  }
                  )}
                
              }); 
            }
        
      }  

  render() {
    var { navigate } = this.props.navigation;
    return (
     <View style={styles.container}> 
        <Text style={styles.labels}>Name:</Text>
        <TextInput style={styles.input}
                    placeholder="Name"
                    placeholderTextColor='#e2e8e5'
                    underlineColorAndroid="transparent"
                    onChangeText={(name) => this.setState({name})}
                    />
                    <Text style={styles.labels}>Bedrag:</Text>
        <TextInput style={styles.input}
                    placeholder="Bedrag"
                    placeholderTextColor='#e2e8e5'
                    underlineColorAndroid="transparent"
                    onChangeText={(bedrag) => this.setState({bedrag})}
                    />
        <Text style={styles.labels}>Currency:</Text>
            <Picker selectedValue={this.state.currency} onValueChange={this.setCurrency} style={styles.picker}>
            <Picker.Item label="Euro" value="Euro" />
            <Picker.Item label="Dollar" value="Dollar" />
            <Picker.Item label="Pound" value="Pound" />
        </Picker>
        <Text style={styles.labels}>Date:</Text>
        <TextInput style={styles.input}
                    placeholder="Date"
                    placeholderTextColor='#e2e8e5'
                    underlineColorAndroid="transparent"
                    onChangeText={(date) => this.setState({date})}
                    />
        <Text style={styles.labels}>Way of splitting}</Text>
        <Picker selectedValue={this.state.wayOfSplit} onValueChange={this.setWayOfSplit} style={styles.picker}>
          <Picker.Item label="Own Share" value="Own Share" />
          <Picker.Item label="Evenely divided" value="Evenly divided" />
          <Picker.Item label="Bill" value="Bill" />
        </Picker>
        <TouchableOpacity style={styles.addRekening}>
                    <Text style={styles.addRekeningText}>Voeg rekening toe </Text>
        </TouchableOpacity>
    </View>

    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d9280'
  },
  labels: {
    marginLeft: '10%',
    marginTop: 5,
    marginBottom: 5,
    color: '#e2e8e5'
},
input: {
  width: '80%',
  height: 30,
  backgroundColor: 'rgba(255,255,255,0.3)',
  paddingHorizontal: 10,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#e2e8e5',
  color: '#e2e8e5',
  paddingVertical: 5,
  marginLeft: '10%'
},
  addRekening: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 50,
    width: '100%',
    backgroundColor: '#e2e8e5',
    paddingVertical: 25,
    height: '15%'
},
addRekeningText: {
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
    paddingVertical: 5,
    marginLeft: '10%'
  }
});