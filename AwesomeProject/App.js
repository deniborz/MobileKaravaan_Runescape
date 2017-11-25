import React from 'react';
import { Button, Alert, StyleSheet, Text, View, TextInput } from 'react-native';

import Login from './src/Components/Login/Login';
import Groepen from './src/Components/Groepen/Groepen';
import NewGroep from './src/Components/Groepen/NewGroep';
import {StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
    Login: {screen: Groepen},
    Groep:{screen: Login}, 
    NewGroep:{screen: NewGroep},
})
export default Navigation;

/*class App extends React.Component {
  render() {
;    return (
      <Login /> 
    );
  }
}*/