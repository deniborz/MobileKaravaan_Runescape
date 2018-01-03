import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Picker, AsyncStorage } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
    this.state = {
      currency: 'Euro',
      language: ''
    }
  }

  updateCurrency = (currency) => {
    this.setState({ currency: currency })
  }
  updateLanguage = (language) => {
    this.setState({ language: language })
  }

  setLanguage = (language) => {
    this.setState({ language: language });

    if (AsyncStorage.getItem('activeUser')) {
      AsyncStorage.getItem('activeUser')
        .then((value) => {
          const data = JSON.parse(value);
          if (AsyncStorage.getItem(data.User)) {
            AsyncStorage.getItem(data.User)
              .then((value) => {
                const data2 = JSON.parse(value);
                if (this.state.language == 'Nederlands') {
                  data2.Language = 'nl';
                  this.setState({ language: language });
                  alert(data2.Language);
                } else if (this.state.language == 'Français') {
                  data2.Language = 'fr';
                  this.setState({ language: language });
                  alert(data2.Language);
                } else if (this.state.language == 'English') {
                  data2.Language = 'en';
                  this.setState({ language: language });
                  alert(data2.Language);
                } else {
                  alert('fout');
                }
                
                //const language = data2.Language;
                //this.setState({ language: language });
              });
          }
        });
    }
  }

  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>


        <Text style={styles.label}>Taal:</Text>
        <Picker selectedValue={this.state.language} onValueChange={this.setLanguage} style={styles.picker}>
          <Picker.Item label="Nederlands" value="Nederlands" />
          <Picker.Item label="Français" value="Français" />
          <Picker.Item label="English" value="English" />
        </Picker>
        <Text style={styles.label}>Munteenheid: {this.state.language}</Text>
        <Picker selectedValue = {this.state.currency} onValueChange = {this.updateCurrency} style={styles.picker}>
          <Picker.Item label = "Euro" value = "Euro" />
          <Picker.Item label = "Dollar" value = "Dollar" />
          <Picker.Item label = "Pound" value = "Pound" />
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
  }
});