import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class Vrienden extends React.Component {
    static navigationOptions = {
        title: 'Vrienden',
    };
    render() {
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container} >
                <TouchableOpacity style={styles.addFriends} onPress={() => navigate("AddVriend", {})}>
                    <Text style={styles.addFriendsText}>Voeg nieuwe vrienden toe </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#659ec7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addFriends: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: '100%',
        backgroundColor: '#245611',
        paddingVertical: 25,
        height: 75,
    },
    addFriendsText: {
        textAlign: 'center',
        color: 'white'
        
    }
});