import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class GroepPage extends React.Component {
    static navigationOptions = {
        title: 'GroepPage',
    };
    constructor(props){
        super(props);
        this.state={
            groupname: ''
        }
    }

    render() {

        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity style={styles.groepen} onPress= {() => navigate('RekeningOverzicht', {})} >
                        <Text style={styles.groeptext}>Vakantie {this.props.navigation.state.params.groupname}</Text>
                    </TouchableOpacity>

                </ScrollView>
                <TouchableOpacity style={styles.addGroup}>
                    <Text style={styles.addGroupText}>Voeg een nieuwe rekening toe </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d9280',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    groepen: {
        backgroundColor: '#545646',
        height: 75,
        marginBottom: 3
    },
    groeptext: {
        paddingHorizontal: 10
    },
    addGroup: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#245611',
        paddingVertical: 25,
        height: 75,
    },
    addGroupText: {
        textAlign: 'center',
        color: 'white'
    }
});