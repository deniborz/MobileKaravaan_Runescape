import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
const util = require('util');
const backAction = NavigationActions.back({key: 'Vrienden'});

export default class AddVriend extends React.Component {
    static navigationOptions = {
        title: 'AddVriend',
    };

    addFriend() {
        alert('Vriendje toevoegen');
        //this.props.navigation.dispatch(backAction);
    } 

    render() {
        var {navigate } = this.props.navigation;

        return (
            <View style={styles.container} >
                <TextInput style={styles.addFriendInput}
                 placeholder="Enter username of friend"
                 placeholderTextColor= 'black'/>
                <TouchableOpacity style={styles.addFriends} onPress={this.addFriend}>
                    <Text style={styles.addFriendsText}>Voeg toe! </Text>
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
        width: '100%',
        height: 50,
        backgroundColor: '#a3a3c2',
        paddingHorizontal: 10
    },
    addFriendsText: {
        textAlign: 'center',
        lineHeight: 30,
    },
    addFriendInput: {
        position: 'absolute',
        top: '20%',
        left: '10%',
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '80%'
    }
});