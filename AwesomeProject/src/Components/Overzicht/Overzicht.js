import React from 'react';
import { StyleSheet, Text, View, Button, Alert, BackHandler, Keyboard, TouchableOpacity, AsyncStorage } from 'react-native';

import { StackNavigator } from 'react-navigation';
const util = require('util');

let listener = null;

export default class Overzicht extends React.Component {
  static navigationOptions = {
    title: 'Overzicht',
  };
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }
    Keyboard.dismiss();
    this.setActiveUser();
}

  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeButtonText}>Welkom {this.state.username}</Text> 
        <TouchableOpacity style={styles.navigationButton} onPress={() => navigate("Groep", {})}>
          <Text style={styles.navigationButtonText}>Groepen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton} onPress={() => navigate("Vrienden", {})}>
          <Text style={styles.navigationButtonText}>Vrienden </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton} onPress={() => navigate("Instellingen", {})}>
          <Text style={styles.navigationButtonText}>Instellingen</Text>
        </TouchableOpacity>
      </View>
    );
  }

  setActiveUser = () => {
    if (AsyncStorage.getItem('activeUser')) {
        AsyncStorage.getItem('activeUser')
        .then((value) => {
            const data = JSON.parse(value);
            if(data == null) {
            alert("De gebruikersnaam/wachtwoord is ongeldig.");
            }
            else {
              this.setState({username: data.User});
            }
        });
      }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d9280',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationButton: {
    width: '75%',
    height: 70,
    backgroundColor: '#e2e8e5',
    paddingVertical: 10,
    margin: 20,
    borderRadius: 5
  },
  navigationButtonText: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    color: '#4d9280'
  },
  welcomeButtonText: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20
  }
});