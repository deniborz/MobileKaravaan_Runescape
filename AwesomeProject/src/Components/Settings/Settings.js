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
      currency: 'Euro (€)',
      language: 'English'
    }
  }

  updateCurrency = (currency) => {
    this.setState({ currency: currency })
  }

  setLanguage = (language) => {
    this.setState({ language: language });

    if (AsyncStorage.getItem('activeUser')) {
      AsyncStorage.getItem('activeUser')
        .then((value) => {
          const data = JSON.parse(value);
          if (this.state.language == 'Nederlands') {
            data.Language = 'nl';
            this.setState({ language: language });
            alert(data.Language);
          } else if (this.state.language == 'Français') {
            data.Language = 'fr';
            this.setState({ language: language });
            alert(data.Language);
          } else if (this.state.language == 'English') {
            data.Language = 'en';
            this.setState({ language: language });
            alert(data.Language);
          } else {
            alert('fout');
          }

          let updatedUser = {
            Language: data.Language
          };

          AsyncStorage.mergeItem('activeUser', JSON.stringify(updatedUser));
          //const language = data2.Language;
          //this.setState({ language: language });
        });
    }
  }

  getActiveUser = () => { 
    if (AsyncStorage.getItem('activeUser')) {
     AsyncStorage.getItem('activeUser')
     .then((value) => {
          const user = JSON.parse(value);});
    }
    return user;
  }

  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>


        <Text style={styles.label}>{I18n.t('lang', {locale: this.getActiveUser.Language})} {this.state.language}</Text>
        <Picker selectedValue={this.state.language} onValueChange={this.setLanguage} style={styles.picker}>
          <Picker.Item label="Nederlands" value="Nederlands" />
          <Picker.Item label="Français" value="Français" />
          <Picker.Item label="English" value="English" />
        </Picker>
        <Text style={styles.label}>{I18n.t('currency', {locale: this.getActiveUser.Language})} {this.state.currency}</Text>
        <Picker selectedValue={this.state.currency} onValueChange={this.updateCurrency} style={styles.picker}>
          <Picker.Item label="Euro (€)" value="Euro (€)" />
          <Picker.Item label="Dollar ($)" value="Dollar ($)" />
          <Picker.Item label="Pound (£)" value="Pound (£)" />
        </Picker>
        <TouchableOpacity style={styles.save} onPress={() => navigate("Overzicht", {})}>
                    <Text style={styles.savetext}>{I18n.t('save', {locale: this.getActiveUser.Language})}</Text>
                </TouchableOpacity>
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