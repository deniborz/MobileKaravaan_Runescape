import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

<<<<<<< HEAD
import Login from  './src/Components/Login/Login';

export default class App extends React.Component {
=======
import Login from './src/Components/Login/Login';
import Vrienden from './src/Components/Vrienden/Vrienden';
import {StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
    First: {screen: Login},
    Second:{screen: Vrienden}, 
})
export default Navigation;

/*class App extends React.Component {
>>>>>>> 135fdbed6a80fdae1e12cddfa9e17afc4255d077
  render() {
;    return (
      <Login />
    );
  }
<<<<<<< HEAD
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
}*/
>>>>>>> 135fdbed6a80fdae1e12cddfa9e17afc4255d077
