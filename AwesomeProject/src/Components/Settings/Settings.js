import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Picker } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class Settings extends React.Component {
  static navigationOptions= {
    title: 'Settings',
};
state = {currency: 'Euro', taal: 'Nederlands'}
updateCurrency = (currency) => {
   this.setState({ currency: currency })
}
updateTaal = (taal) => {
  this.setState({taal: taal})
}
  render() {
    var { navigate } = this.props.navigation;
    return(
    <View style={styles.container}>
      
     
         <Text style={styles.currency}>Taal: {this.state.taal}</Text>
    
      <Picker selectedValue = {this.state.taal} onValueChange = {this.updateTaal} style={styles.picker}>
               <Picker.Item label = "Nederlands" value = "Nederlands"/>
               <Picker.Item label = "Français" value = "Français" />
               <Picker.Item label = "English" value = "English" />
            </Picker>
      <Text style={styles.currency}>Munteenheid: {this.state.currency}</Text>
      <Picker selectedValue = {this.state.currency} onValueChange = {this.updateCurrency} style={styles.picker}>
               <Picker.Item label = "Euro" value = "Euro" />
               <Picker.Item label = "Dollar" value = "Dollar" />
               <Picker.Item label = "Pound" value = "Pound" />
            </Picker>
            </View>
    )}
 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#659ec7',
    
  },
  knop: {
    width: '80%',
    backgroundColor:'#245611',
    paddingVertical: 10,
    margin: 20,
    borderRadius: 5,
    alignSelf: 'center'
  },
  knopText:{
    textAlign: 'center',
    color: '#fff'
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
  },
  currency: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#245611',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    paddingVertical: 10,
    margin: 20,
    fontSize: 30

  }, 
  picker: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#245611',
    color: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    margin: 20
  }
});