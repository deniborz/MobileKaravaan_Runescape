import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';

import I18n from 'react-native-i18n';

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

  UserLoginFunction = () => {
    //AsyncStorage.clear();
    if(this.state.username == '' || this.state.password == ''){
      alert("Username and/or password are invalid.");
    }
    else{
      if (AsyncStorage.getItem(this.state.username)) {
        AsyncStorage.getItem(this.state.username)
        .then((value) => {
          const data = JSON.parse(value);
          if(data != null && data.Password == this.state.password) {
            let activeUser = {User: this.state.username};
            AsyncStorage.setItem('activeUser', JSON.stringify(activeUser));
            I18n.locale = data.Language;
            this.passwordInput.setNativeProps({text: ''});
            this.state.password = '';
            this.props.navigation.navigate("Overzicht", {username : this.state.username});
          }
          else {
            alert("Username and/or password are invalid.");
          }
        });         
      }
  }
  }


  render() {
    var { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="position" style={styles.container}>
          <Text style={styles.logo}>Karavaan</Text>
          <View style={styles.containerForm}>
            <TextInput placeholder={I18n.t('username', {locale: 'en'})}
              placeholderTextColor='#e2e8e5'
              style={styles.input}
              onSubmitEditing={() => this.passwordInput.focus()}
              underlineColorAndroid="transparent"
              onChangeText={(username) => this.setState({ username })}
            />
            <TextInput
              secureTextEntry={true}
              placeholder={I18n.t('password', {locale: 'en'})}
              placeholderTextColor='#e2e8e5'
              secureTextEntry
              style={styles.input}
              ref={(input) => this.passwordInput = input}
              underlineColorAndroid="transparent"
              onChangeText={(password) => this.setState({ password })}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={this.UserLoginFunction}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("RegisterUser", {})}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>


    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d9280'
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40%',
    left: '20%',
    color: '#e2e8e5',
    fontSize: 60
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e2e8e5',
    color: '#e2e8e5'
  },
  containerForm: {
    marginTop: '45%',
    padding: 20
  },
  Title: {
    fontSize: 50,
    color: 'white'
  },
  buttonContainer: {
    backgroundColor: '#e2e8e5',
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 55
  },
  buttonText: {
    textAlign: 'center',
    color: '#4d9280',
    marginTop: 6,
    fontWeight: '500'
  }
});