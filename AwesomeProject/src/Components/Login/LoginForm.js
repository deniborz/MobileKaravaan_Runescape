import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import Layout from '../Layout/Layout';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  _onPressButton() {
    Alert.alert('KAK');
  }
  _onPressButton2() {
    <Vrienden />
  }
  render() {
    return (
      <View style={styles.container}>
          <TextInput placeholder="Username"
        style={styles.input}
      /> 
      <TextInput 
      placeholder="Password"
      secureTextEntry
        style={styles.input}
      /> 
      <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 20,
      paddingHorizontal: 10

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