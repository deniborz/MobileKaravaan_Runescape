import React from 'react';
import { Button, Alert, StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {text: 'Lel'};
    }
    _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Welkom bij Karavaan</Text> 
        <View style={styles.login}>  
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
        </View>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'lightblue',
    
  },
  title: {
      fontSize: 35,
      textAlign: 'center',
      marginTop: 25,
  },
  login: {
      padding: 15,
      marginTop: 50,

  },

});
