import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Picker, AsyncStorage } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import { StackNavigator } from 'react-navigation';
import I18n from 'react-native-i18n';

const util = require('util');
export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.navigation.state.params.username,
      currency: '',
      language: '',
      languageFull: ''
    }
  }

  componentWillMount() {
    if (AsyncStorage.getItem(this.state.username)) {
      AsyncStorage.getItem(this.state.username)
        .then((value) => {
          const userData = JSON.parse(value);
          this.setState({ language: userData.Language });
          if (this.state.language == 'nl') {
            this.setState({ languageFull: "Nederlands" });
          } else if (this.state.language == 'fr') {
            this.setState({ languageFull: "français"})
          } else if (this.state.language == 'en') {
            this.setState({ languageFull: "English"})
          } else {
            alert('fout');
          }
          this.setState({ currency: userData.Currency });
      });
    }
    this.props.navigation.navigator.replacePreviousAndPop("Overzicht");
  }

  updateCurrency = (currency) => {
    this.setState({ currency: currency });
  }

  setLanguage = (language) => {
    if (AsyncStorage.getItem(this.state.username)) {
      AsyncStorage.getItem(this.state.username)
        .then((value) => {
          const userData = JSON.parse(value);
          const activeUser = userData;
          if (language == 'Nederlands') {
            activeUser.Language = 'nl';
            I18n.locale = activeUser.Language;
            this.setState({ language: activeUser.Language });
            this.setState({ languageFull: "Nederlands" });
          } else if (language == 'français') {
            activeUser.Language = 'fr';
            I18n.locale = activeUser.Language;
            this.setState({ language: activeUser.Language });
            this.setState({ languageFull: "français" });
          } else if (language == 'English') {
            activeUser.Language = 'en';
            I18n.locale = activeUser.Language;
            this.setState({ language: activeUser.Language });
            this.setState({ languageFull: "English" });
          } else {
            alert('Language error');
          }

          AsyncStorage.setItem(activeUser.Username, JSON.stringify(userData), () => {
            AsyncStorage.mergeItem(activeUser.Username, JSON.stringify(activeUser), () => {
            });
          });
        });
    }
  }

  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{I18n.t('lang')}</Text>
        <Picker selectedValue={this.state.languageFull} onValueChange={this.setLanguage} style={styles.picker}>
          <Picker.Item label="Nederlands" value="Nederlands" />
          <Picker.Item label="français" value="français" />
          <Picker.Item label="English" value="English" />
        </Picker>
        <Text style={styles.label}>{I18n.t('currency')}</Text>
        <Picker selectedValue={this.state.currency} onValueChange={this.updateCurrency} style={styles.picker}>
          <Picker.Item label="Euro (€)" value="Euro (€)" />
          <Picker.Item label="Dollar ($)" value="Dollar ($)" />
          <Picker.Item label="Pound (£)" value="Pound (£)" />
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d9280',

  },
  knop: {
    width: '80%',
    backgroundColor: '#245611',
    paddingVertical: 10,
    margin: 20,
    borderRadius: 5,
    alignSelf: 'center'
  },
  knopText: {
    textAlign: 'center',
    color: '#fff'
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
  },
  label: {
    color: '#e2e8e5',
    margin: 20,
    fontSize: 30

  },
  picker: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e2e8e5',
    color: '#e2e8e5',
    paddingVertical: 10,
    margin: 20
  },
  save: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 40,
    width: '100%',
    backgroundColor: '#e2e8e5',
    paddingVertical: 20,
    height: '15%'
},
savetext: {
    textAlign: 'center',
    color: '#4d9280',
    fontSize: 25
}
});