import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';

import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  
  static navigationOptions = {
    title: 'Login',
    headerStyle: {marginTop: -100}
  };

  UserLoginFunction = () =>{

    if (AsyncStorage.getItem(this.state.username)) {
      AsyncStorage.getItem(this.state.username)
      .then((value) => {
        const data = JSON.parse(value);
        if(data == null) {
          alert("De gebruikersnaam/wachtwoord is ongeldig.");
        }
        else if(data.Password == this.state.password) {
          this.props.navigation.navigate("Overzicht", {});
        }
        else {
          alert("De gebruikersnaam/wachtwoord is ongeldig.");
        }
      });         
    }
    
  }


  render() {
    var { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.Title}>KARAVAAN</Text>
          </View>
          <View style={styles.containerForm}>
            <TextInput placeholder="Gebruikersnaam"
              placeholderTextColor='#3d7ca9'
              style={styles.input}
              onSubmitEditing={() => this.passwordInput.focus()}
              underlineColorAndroid="transparent"
              onChangeText={(username) => this.setState({ username })}
            />
            <Text>{this.username}</Text>
            <TextInput
              placeholder="Wachtwoord"
              placeholderTextColor='#3d7ca9'
              secureTextEntry
              style={styles.input}
              ref={(input) => this.passwordInput = input}
              underlineColorAndroid="transparent"
              onChangeText={(password) => this.setState({ password })}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={this.UserLoginFunction}>
              <Text style={styles.buttonText}>LOG IN</Text></TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("RegisterUser", {})}>
              <Text style={styles.buttonText}>REGISTREER</Text></TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>


    );
  }
  login = () => {
    AsyncStorage.getItem('UID123', (err, result) => {
      console.log(result);
    });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#659ec7',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  containerForm: {
    padding: 20
  },

  Title: {
    fontSize: 50
  },
  buttonContainer: {
    backgroundColor: '#245611',
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});