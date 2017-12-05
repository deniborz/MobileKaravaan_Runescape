import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class Groepdes extends React.Component {
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
    componentWillReceiveProps(nextProps) {
        // update original states
        this.setState({
          latitude: nextProps.latitude,
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 75,
        marginBottom: 3

    },
    noteText: {
        paddingLeft: 20,

    },
    addGroup: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingVertical: 25,
        height: 75,
        backgroundColor: '#545646'
    }

    
});