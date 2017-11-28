import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';

export default class Settings extends React.Component {
    static navigationOptions = {
        title: 'RegisterUser',
    };
    render() {
        var { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
               
                    <Text style={styles.Title}>KARAVAAN</Text>

                    <Text style={styles.labels}>Username</Text>
                    <TextInput style={styles.input}
                        placeholder="Username"
                        placeholderTextColor='#3d7ca9' />

                    <Text style={styles.labels}>Password</Text>
                    <TextInput style={styles.input}
                        placeholder="Password"
                        placeholderTextColor='#3d7ca9' />

                        <Text style={styles.labels}>Naam (Voor en achternaam)</Text>
                    <TextInput style={styles.input}
                        placeholder="Naam"
                        placeholderTextColor='#3d7ca9' />

                    <Text style={styles.labels}>Email (Optioneel)</Text>
                    <TextInput style={styles.input}
                        placeholder="Email"
                        placeholderTextColor='#3d7ca9' />

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("Login", {})}>
                        <Text style={styles.buttonText}>REGISTER</Text></TouchableOpacity>
                
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#659ec7',
    },
    Title: {
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 25,
        fontSize: 50
    },
    labels: {
        marginLeft: '10%',
        marginTop: 5,
        marginBottom: 5
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '80%',
        marginLeft: '10%'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#245611',
        paddingVertical: 10,
        height: 50,
        width: '100%'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});