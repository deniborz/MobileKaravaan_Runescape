import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import {StackNavigator} from 'react-navigation';
const util = require('util');
export default class Groepen extends React.Component {
  static navigationOptions= {
    title: 'Groepen',
};


  render() {
    var{navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text style= {styles.title}> Uw Groepen</Text>
          <TouchableOpacity style={styles.groepen}>
              <Text style={styles.groeptext}>GROEP 1</Text>
          </TouchableOpacity>
      
          <TouchableOpacity style={styles.addGroep} onPress={() => navigate("NewGroep", {})}>
              <Text style={styles.addGroepText}>New Group</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#659ec7',
  },
  groepen: {
    backgroundColor: '#545646',
    height: 40

  },
  groeptext: {
    paddingHorizontal: 10
  },
  addGroep:{
    backgroundColor: '#FDFEFE'
  },
  title: {
    fontSize: 20
  }
});