import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import Layout from '../Layout/Layout';
import {StackNavigator} from 'react-navigation';
const util = require('util');
export default class Login extends React.Component {
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
      /> 
      <TextInput 
      placeholder="Password"
      placeholderTextColor= 'black'
      secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}
        underlineColorAndroid="transparent"
      /> 
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("Second")}>
          <Text style={styles.buttonText}>LOGIN</Text></TouchableOpacity>
          </View>
      </View>
</KeyboardAvoidingView>
      

    );
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