import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class Overzicht extends React.Component {
  static navigationOptions = {
    title: 'Overzicht',
  };

  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.navigationKnop} onPress={() => navigate("Groep", {})}>
          <Text style={styles.navigationKnopText}>Groepen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationKnop} onPress={() => navigate("Vrienden", {})}>
          <Text style={styles.navigationKnopText}>Vrienden</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationKnop} onPress={() => navigate("Instellingen", {})}>
          <Text style={styles.navigationKnopText}>Instellingen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#659ec7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationKnop: {
    width: '80%',
    backgroundColor:'#a3a3c2',
    paddingVertical: 10,
    margin: 20
  },
  navigationKnopText: {
    textAlign: 'center',
  }
});