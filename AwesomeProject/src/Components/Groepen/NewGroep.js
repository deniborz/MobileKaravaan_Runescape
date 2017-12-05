import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {observable} from 'mobx';
import { StackNavigator } from 'react-navigation';
import Groepdes from './Groepdes';
const util = require('util');

export default class NewGroep extends React.Component {
  static navigationOptions = {
    title: 'NewGroep',
  };
  constructor(props) {
    super(props);
  }
 

  addGroup() {
    alert('Vriendje toevoegen');
  };
  
  render() {
   

    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Nieuwe Groep</Text>

        <TextInput placeholder="Groepsnaam"
          placeholderTextColor='#3d7ca9'
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(groupname) => this.setState({ groupname })}
        />
        

        <TouchableOpacity style={styles.addGroup} onPress={this.addGroep.bind(this)}>
          <Text style={styles.addGroupText}>Aanmaken</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
  
  addGroep(){
    
     this.state.groepenArray.push({'date': 'lel', 'note':this.state.groupname});
     this.setState({groepenArray: this.state.groepenArray})
     this.setState({groepText: ''});
    

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#659ec7',
  },
  Title: {
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 25,
    fontSize: 50
},
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '80%',
    marginLeft: '10%'
  },
  addGroup: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#245611',
      paddingVertical: 25,
      height: 75,
  },
  addGroupText: {
      textAlign: 'center',
      color: 'white'
  }
});