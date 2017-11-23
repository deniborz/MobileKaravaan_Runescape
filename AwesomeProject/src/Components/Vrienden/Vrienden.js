import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {StackNavigator} from 'react-navigation';
const util = require('util');
export default class Vrienden extends React.Component {
  static navigationOptions= {
    title: 'Vrienden',
};
  render() {
    return (
      <View style={styles.container}>
          <Text>vriendenpagina</Text>
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