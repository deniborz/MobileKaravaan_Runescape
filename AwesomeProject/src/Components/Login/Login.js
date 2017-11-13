import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import Layout from '../Layout/Layout';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  _onPressButton() {
    Alert.alert('KAK');
  }
  _onPressButton2() {
    <Vrienden />
  }
  render() {
    return (
      <View style={styles.container}>
          <Text>Log in to Karavaan</Text>
          <Text>Username</Text>
          <TextInput
        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        
      /> 
      <Text>Password</Text>
      <TextInput
        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        
      />
          <Button onPress={this._onPressButton} title ="Log In" color = "#454"> </Button>
          <Button onPress={this._onPressButton2} title ="Vrienden" color = "#454"> </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});