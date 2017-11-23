import React from 'react';
import { Button, Alert, StyleSheet, Text, View, TextInput } from 'react-native';

import Login from './src/Components/Login/Login';
import Vrienden from './src/Components/Vrienden/Vrienden';
import {StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
    First: {screen: Login},
    Second:{screen: Vrienden}, 
})
export default Navigation;

/*class App extends React.Component {
  render() {
;    return (
      <Login />
    );
  }
}*/