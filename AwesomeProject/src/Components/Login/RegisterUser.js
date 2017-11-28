import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';

export default class Settings extends React.Component {
    static navigationOptions = {
        title: 'RegisterUser',
      };
  render() {
    return (
      <View>
        <Text>
          TEST
        </Text>
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