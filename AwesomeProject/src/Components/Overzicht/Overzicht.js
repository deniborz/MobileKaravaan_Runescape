import React from 'react';
import { StyleSheet, Text, View, Button, Alert, BackHandler, Keyboard, TouchableOpacity, AsyncStorage } from 'react-native';

import { StackNavigator } from 'react-navigation';

import I18n from 'react-native-i18n';

const util = require('util');

export default class Overzicht extends React.Component {
  static navigationOptions = {
    title: "Overzicht",
  };
  constructor(props){
    super(props);
    this.state = {
      username: this.props.navigation.state.params.username,
    }
    Keyboard.dismiss();
  }

  componentWillMount(){
    console.log("is this working?");
  }

  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      
        <Text style={styles.welcomeButtonText}>{I18n.t('greet')} {this.state.username}</Text> 
        <TouchableOpacity style={styles.navigationButton} onPress={() => navigate("Groep", {username : this.state.username})}>
          <Text style={styles.navigationButtonText}>{I18n.t('groups')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton} onPress={() => navigate("Vrienden", {username : this.state.username})}>
          <Text style={styles.navigationButtonText}>{I18n.t('friends')} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton} onPress={() => navigate("Instellingen", {username : this.state.username})}>
          <Text style={styles.navigationButtonText}>{I18n.t('settings')}</Text>
        </TouchableOpacity>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d9280',
    alignItems: 'center',
    justifyContent: 'center'
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