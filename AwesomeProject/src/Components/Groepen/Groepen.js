import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';

export default class Groepen extends React.Component {

  render() {
    return (
      <View style={styles.container}></View>
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