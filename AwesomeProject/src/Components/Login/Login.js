import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';

export default class Login extends React.Component {
  _onPressButton() {
    return(
    <Vrienden/>
    );
  }
  render() {
    return (
      <View style={styles.container}>
          <Text>Log in to Karavaan</Text>
          
          <Button onPress={this._onPressButton} title ="Log In" color = "#454"> </Button>
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