import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import Layout from '../Layout/Layout';
import LoginForm from './LoginForm';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Text style={styles.Title}>KARAVAAN</Text>
      </View>
         <LoginForm/>
      </View>
</KeyboardAvoidingView>
      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#658',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  Title: {
    fontSize: 50
  }
});