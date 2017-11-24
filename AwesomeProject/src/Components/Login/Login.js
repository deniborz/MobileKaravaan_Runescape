import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';

import {StackNavigator} from 'react-navigation';
const util = require('util');
export default class Login extends React.Component {

/*constructor(props){
  super(props);
  this.state; {
    username: '';
    password: '';
  }
}

componentDidMount() {
  this._loadInitialState().done();
}
_loadInitialState = async () => {
  var value = await AsyncStorage.getItem('user');
  if(value!==null){
    this.props.navigation.navigate('Second');
  }
}*/

  static navigationOptions= {
    title: 'Login',
};


  render() {
    var{navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Text style={styles.Title}>KARAVAAN</Text>
      </View>
      <View style={styles.containerForm}>
      <TextInput placeholder="Username"
          placeholderTextColor= 'black'
        style={styles.input}
        onSubmitEditing={() => this.passwordInput.focus()}
        underlineColorAndroid="transparent"
        onChangeText={ (username) => this.setState({username})}
      /> 
      <TextInput 
      placeholder="Password"
      placeholderTextColor= 'black'
      secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}
        underlineColorAndroid="transparent"
        onChangeText={ (password) => this.setState({password})}
      /> 
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("Overzicht", {})}>
          <Text style={styles.buttonText}>LOGIN</Text></TouchableOpacity>
          </View>
      </View>
</KeyboardAvoidingView>
      

    );
  }
  login = () => {
    
    /*alert(this.state.username);
    fetch('exp://192.168.0.244:19000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((res) => {
      if(res.succes === true){
        AsyncStorage.setItem('user', res.user);
        this.props.navigation.navigate('Second');
      }
      else {
        alert(res.message);
      }
    })
    .done();
  }*/
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
    

},
  containerForm: {
    padding: 20
  },

  Title: {
    fontSize: 50
  },
  buttonContainer: {
    backgroundColor:'#245611',
    paddingVertical: 10
},
buttonText: {
   textAlign: 'center',
   color: '#FFFFFF'
}
});