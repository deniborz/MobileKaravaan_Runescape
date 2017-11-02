import React from 'react';
import { Button, Alert, StyleSheet, Text, View, TextInput } from 'react-native';

import Login from  './src/Components/Login/Login';
import Vrienden from './src/Components/Vrienden/Vrienden';
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {text: 'Lel'};
    }
    _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
;    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'lightblue',
    
  },
  title: {
      fontSize: 35,
      textAlign: 'center',
      marginTop: 25,
  },
  login: {
      padding: 15,
      marginTop: 50,

  },

});
