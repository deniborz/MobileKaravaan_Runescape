import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput, ScrollView, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Groepdes from './Groepdes';
import Groepen from '../Groepen/Groepen';
import I18n from 'react-native-i18n';

const util = require('util');

export default class NewGroep extends React.Component {
  static navigationOptions = {
    title: 'NewGroep',
  };

  
  constructor(props) {
         super(props)
         this.state = {
         groupname: '',
               }
               this.setActiveUser();
  }

GroupRegistrationFunction = () =>{
    let newGroup = {
        Groupname: this.state.groupname
        
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

getActiveUser = () => { 
  if (AsyncStorage.getItem('activeUser')) {
   AsyncStorage.getItem('activeUser')
   .then((value) => {
        const user = JSON.parse(value);});
  }
  return user;
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

            <KeyboardAvoidingView behavior="position">
                <Text style={styles.Title}>KARAVAAN   </Text>

                <Text style={styles.labels}>Groepsnaam</Text>
                <TextInput style={styles.input}
                    placeholder="Groepsnaam"
                    placeholderTextColor='#3d7ca9'
                    underlineColorAndroid="transparent"
                    onChangeText={(groupname) => this.setState({groupname})}
                    />
                    <Text style={styles.labels}> Vrienden</Text>
                    <Text style={styles.labels}> Currencies</Text>


            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.buttonContainer} onPress={this.GroupRegistrationFunction}>
                <Text style={styles.buttonText}>Maak groep</Text></TouchableOpacity>

        </View >
    );
}

setActiveUser = () => {
  if (AsyncStorage.getItem('activeUser')) {
      AsyncStorage.getItem('activeUser')
      .then((value) => {
          const data = JSON.parse(value);
          if(data == null) {
          alert("De gebruikersnaam/wachtwoord is ongeldig.");
          }
          else {
            this.setState({username: data.User});
          }
      });
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
    marginTop: 100,
    marginBottom: 25,
    fontSize: 50
},
labels: {
    marginLeft: '10%',
    marginTop: 5,
    marginBottom: 5
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
buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#245611',
    paddingVertical: 25,
    height: 75,
    width: '100%'
},
buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
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