import React from 'react';
import { Button, Alert, StyleSheet, Text, View, TextInput } from 'react-native';

import Login from './src/Components/Login/Login';
import Groepen from './src/Components/Groepen/Groepen';
import {StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
    First: {screen: Login},
    Groep:{screen: Groepen}, 
})
export default Navigation;

/*class App extends React.Component {
  render() {
;    return (
      <Login />
    );
  }
}*/