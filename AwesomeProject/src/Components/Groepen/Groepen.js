import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

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
      <ScrollView style={styles.scrollContainer}>
          <TouchableOpacity style={styles.groepen} onPress={() => navigate("GroepPage", {})}>
              <Text style={styles.groeptext}>GROEP 1</Text>
          </TouchableOpacity>
          </ScrollView>
          <TouchableOpacity style={styles.addGroup} onPress={() => navigate("NewGroep", {})}>
                    <Text style={styles.addGroupText}>Voeg een nieuwe groep toe </Text>
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
    height: 40,
  },
  groeptext: {
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20
  },
  addGroup: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 50,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#a3a3c2',
},
addGroupText: {
    textAlign: 'center',
    
}
});