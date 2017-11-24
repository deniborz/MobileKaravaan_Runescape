import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/Components/Login/Login';
import Vrienden from './src/Components/Vrienden/Vrienden';
import {StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
    Login: {screen: Login},
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
