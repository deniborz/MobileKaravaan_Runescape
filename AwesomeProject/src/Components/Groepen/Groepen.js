import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, TextInput, AsyncStorage } from 'react-native';
import { observer } from 'mobx-react';
import Vrienden from '../Vrienden/Vrienden';
/*import Groepdes from '../Groepen/Groepdes';*/
import NewGroep from '../Groepen/NewGroep';
import { StackNavigator } from 'react-navigation';
const util = require('util');
//@observer
export default class Groepen extends React.Component {
  static navigationOptions = {
    title: 'Groepen',
  };

  state = {
    groepenArray: [{ 'date': 'testdate', 'note': 'testgroep1' }],
    groepText: '',
    groupname: ''
  }


  render() {

    let groepen = this.state.groepenArray.map((val, key) => {
      return <Groepdes key={key} keyval ={key} val={val}  />
    });

    var { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>

        <ScrollView style={styles.scrollContainer}>
          <TouchableOpacity style={styles.groepen} onPress={() => navigate("GroepPage", {})}>
            <Text style={styles.groeptext}>{this.state.groupnameGet}</Text>
          </TouchableOpacity>
          
          {groepen}
         
          


        </ScrollView>
        <TextInput style={styles.groepen}
          onChangeText={(groepText) => this.setState({ groepText })} value={this.state.groepText}>
        </TextInput>
        <TouchableOpacity style={styles.addGroup} onPress={this.addGroep.bind(this)}>
          <Text style={styles.addGroupText}>Voeg een nieuwe groep toe </Text>
        </TouchableOpacity>






      </View>
    );
  }
  
  addGroep() {
    this.props.navigation.navigate("NewGroep", {})
  
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#659ec7',
  },
  groepen: {
    backgroundColor: '#545646',
    height: 75,
    marginBottom: 3
  },
  groeptext: {
    paddingHorizontal: 10
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
class Groepdes extends React.Component {
  static navigationOptions = {
      title: 'Groepdes',
  };

  render() {


      return (
          <View style={styles.container} key={this.props.keyval}>
              <TouchableOpacity style={styles.addGroup}>
                  <Text style={styles.noteText}>{this.props.val.date}</Text>
                  <Text style={styles.noteText}>{this.props.val.note}</Text>
              </TouchableOpacity>

          </View>
      );
  }
  
}