import React from 'react';
import { Button, Alert, StyleSheet, Text, View, TextInput } from 'react-native';


import Login from './src/Components/Login/Login';
import Groepen from './src/Components/Groepen/Groepen';
import NewGroep from './src/Components/Groepen/NewGroep';
import Vrienden from './src/Components/Vrienden/Vrienden';
import AddVriend from './src/Components/Vrienden/AddVriend';
import Overzicht from './src/Components/Overzicht/Overzicht';
import Settings from './src/Components/Settings/Settings';
import GroepPage from './src/Components/Groepen/GroepPage';
import RegisterUser from './src/Components/Login/RegisterUser';
import VeranderCurrency from './src/Components/Settings/VeranderCurrency';

import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
  Login: { screen: Login },
  Groep: { screen: Groepen },
  NewGroep: { screen: NewGroep },
  Vrienden: { screen: Vrienden },
  AddVriend: { screen: AddVriend },
  Overzicht: { screen: Overzicht },
  Instellingen: { screen: Settings},
  GroepPage: { screen: GroepPage },
  RegisterUser: { screen: RegisterUser },
  VeranderCurrency: { screen: VeranderCurrency}
})
export default Navigation;

/*class App extends React.Component {
  render() {
;    return (
      <Login /> 
    );
  }
}*/