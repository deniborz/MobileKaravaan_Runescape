import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native';

import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class NewGroep extends React.Component {
  static navigationOptions = {
    title: 'NewGroep',
<<<<<<< HEAD
  };
  constructor(props) {
    super(props);
    this.state = { groupname: 'lel' };
  }

  addGroup() {
    alert('Vriendje toevoegen');

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Nieuwe Groep</Text>

        <TextInput placeholder="Groepsnaam"
          placeholderTextColor='#3d7ca9'
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(groupname) => this.setState({ groupname })}
        />

        <TouchableOpacity style={styles.addGroup} onPress={this.addGroup}>
          <Text style={styles.addGroupText}>Aanmaken</Text>
        </TouchableOpacity>
=======
};
constructor(props){
  super(props);
  this.state= {groupname: 'lel'};
}

groupRegister = () =>{
  const {groupName} = this.state;

  fetch('server link', {
    method: 'post',
    header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      name: groupName,
    })
  })
  .then((response) => response.json())
    .then((responseJson)=> {
        alert(responseJson);
    })
    .catch((error)=>{
      console.error(error);
    })
}

  render() {
    return (
      <View style={styles.container}>
      <TextInput placeholder="Groupname"
          placeholderTextColor= 'black'
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={ groupname => this.setState({groupname})}
      /> 
       
      <View>
        <Text> groupname: {this.state.groupname}</Text>
        </View>
>>>>>>> 67e78d96f99c6853ee8cc3a829cfc884d34385f5
      </View>
    );
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