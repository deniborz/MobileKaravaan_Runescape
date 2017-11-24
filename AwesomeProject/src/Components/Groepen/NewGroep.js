import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import Vrienden from '../Vrienden/Vrienden';
import {StackNavigator} from 'react-navigation';
const util = require('util');
export default class NewGroep extends React.Component {
  static navigationOptions= {
    title: 'NewGroep',
};

  render() {
    return (
      <View style={styles.container}>
      <TextInput placeholder="Groupname"
          placeholderTextColor= 'black'
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={ (groupname) => this.setState({groupname})}
      /> 

    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#659ec7',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    paddingHorizontal: 10,
    

}
});