import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {observer} from 'mobx-react';
import Vrienden from '../Vrienden/Vrienden';
import Groepdes from '../Groepen/Groepdes';
import NewGroep from '../Groepen/NewGroep';
import {StackNavigator} from 'react-navigation';
const util = require('util');
//@observer
export default class Groepen extends React.Component {
  static navigationOptions= {
    title: 'Groepen',
};

state = {
  groepenArray: [{'date': 'testdate', 'note': 'testgroep1'}],
  groepText: '',
}
  render() {

    let groepen = this.state.groepenArray.map((val, key) => {
      return <Groepdes key={key} keyval={key} val={val} />
    });

    var{navigate} = this.props.navigation;
    return (
      
      <View style={styles.container}>
      
      <ScrollView style={styles.scrollContainer}>
          <TouchableOpacity style={styles.groepen} onPress={() => navigate("GroepPage", {})}>
              <Text style={styles.groeptext}>GROEP 1</Text>
          </TouchableOpacity>
          {groepen}
          
          </ScrollView>
          <TextInput style= {styles.groepen} 
                  onChangeText={(groepText) => this.setState({groepText})} value = {this.state.groepText}>
                  </TextInput>
                  <TouchableOpacity style={styles.addGroup} onPress={()=> navigate("NewGroep", {})}>
                    <Text style={styles.addGroupText}>Voeg een nieuwe groep toe </Text>
                  </TouchableOpacity>

           <TouchableOpacity onPress={this.addGroep.bind(this)}>
                    <Text style={styles.addGroupText}>Voeg een nieuwe groep toe </Text>
                </TouchableOpacity> 
                
           
          
                
      </View>
    );
  }

  addGroep(){
    
     this.state.groepenArray.push({'date': 'lel', 'note':'lel'});
     this.setState({groepenArray: this.state.groepenArray})
     this.setState({groepText: ''});
    

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