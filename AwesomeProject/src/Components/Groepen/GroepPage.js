import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class GroepPage extends React.Component {
    static navigationOptions = {
        title: 'GroepPage',
    };

    render() {

        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#659ec7',
    }
});