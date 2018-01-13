import React from 'react';
import ReactDom from "react-dom";
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
import Rekening from './src/Components/Groepen/Rekening';


import I18n from 'react-native-i18n';

import en from './src/Translations/en';
import fr from './src/Translations/fr';
import nl from './src/Translations/nl';

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
  VeranderCurrency: { screen: VeranderCurrency},
  Rekening: {screen: Rekening}
})

I18n.fallbacks = true;

I18n.translations = {
  en,
  fr,
  nl
};

export default Navigation;

/*class App extends React.Component {
  render() {
;    return (
      <Login /> 
    );
  }
}*/