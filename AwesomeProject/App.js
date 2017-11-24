import React from 'react';
import { Button, Alert, StyleSheet, Text, View, TextInput } from 'react-native';

import Login from './src/Components/Login/Login';
import Groepen from './src/Components/Groepen/Groepen';
import NewGroep from './src/Components/Groepen/NewGroep';
import {StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
<<<<<<< HEAD
    Login: {screen: Groepen},
    Groep:{screen: Login}, 
    NewGroep:{screen: NewGroep},
=======
    Login: {screen: Login},
    Groep:{screen: Groepen}, 
>>>>>>> 23135cb665fb97a5e1be5036a612948889ed4eeb
})
export default Navigation;

/*class App extends React.Component {
  render() {
;    return (
      <Login /> 
    );
  }
}*/