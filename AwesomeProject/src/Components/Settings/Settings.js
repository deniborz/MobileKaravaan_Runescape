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
      currencyFull: '',
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
            this.setState({ languageFull: "Français"})
          } else if (this.state.language == 'en') {
            this.setState({ languageFull: "English"})
          } else {
            alert('fout');
          }
          this.setState({ currency: userData.Currency });
          if (this.state.currency == 'EUR') {
            this.setState({ currencyFull: "Euro" });
          } else if (this.state.currency == 'USD') {
            this.setState({ currencyFull: "Dollar"})
          } else if (this.state.currency == 'GBP') {
            this.setState({ currencyFull: "Pound"})
          } else {
            alert('fout');
          }
      });
    }
  }

  setCurrency = (currency) => {
    if (AsyncStorage.getItem(this.state.username)) {
      AsyncStorage.getItem(this.state.username)
        .then((value) => {
          const userData = JSON.parse(value);
          const activeUser = userData;
          if (currency == 'Euro') {
            activeUser.Currency = 'EUR';
            this.setState({ currency: activeUser.Currency });
            this.setState({ currencyFull: "Euro" });
          } else if (currency == 'Dollar') {
            activeUser.Currency = 'USD';
            this.setState({ currency: activeUser.Currency });
            this.setState({ currencyFull: "Dollar" });
          } else if (currency == 'Pound') {
            activeUser.Currency = 'GBP';
            this.setState({ currency: activeUser.Currency });
            this.setState({ currencyFull: "Pound" });
          } else {
            alert('currency error');
          }

          alert(activeUser.Currency);
          AsyncStorage.setItem(activeUser.Username, JSON.stringify(userData), () => {
            AsyncStorage.mergeItem(activeUser.Username, JSON.stringify(activeUser), () => {
            });
          });
        });
    }
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
          } else if (language == 'Français') {
            activeUser.Language = 'fr';
            I18n.locale = activeUser.Language;
            this.setState({ language: activeUser.Language });
            this.setState({ languageFull: "Français" });
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
          <Picker.Item label="Français" value="Français" />
          <Picker.Item label="English" value="English" />
        </Picker>
        <Text style={styles.label}>{I18n.t('currency')}</Text>
        <Picker selectedValue={this.state.currencyFull} onValueChange={this.setCurrency} style={styles.picker}>
          <Picker.Item label="Euro" value="Euro" />
          <Picker.Item label="Dollar" value="Dollar" />
          <Picker.Item label="Pound" value="Pound" />
        </Picker>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("Overzicht", {username : this.state.username})}>
                <Text style={styles.buttonText}>Save</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d9280',
  },
  label: {
    color: '#e2e8e5',
    marginLeft: 20,
    fontSize: 30
  },
  picker: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e2e8e5',
    color: '#e2e8e5',
    marginLeft: 20,
    marginTop: 5
  },
  
buttonContainer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 50,
  width: '100%',
  backgroundColor: '#e2e8e5',
  paddingVertical: 25,
  height: '15%'
},
buttonText: {
  textAlign: 'center',
  color: '#4d9280',
  fontSize: 25
}
});