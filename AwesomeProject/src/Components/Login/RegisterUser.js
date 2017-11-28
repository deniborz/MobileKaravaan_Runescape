import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';

export default class Settings extends React.Component {
    static navigationOptions = {
        title: 'RegisterUser',
        headerStyle: {marginTop: -100}
    };
    render() {
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <KeyboardAvoidingView behavior="position">
                    <Text style={styles.Title}>KARAVAAN</Text>

                    <Text style={styles.labels}>Gebruikersnaam</Text>
                    <TextInput style={styles.input}
                        placeholder="Gebruikersnaam"
                        placeholderTextColor='#3d7ca9'
                        underlineColorAndroid="transparent"
                        onSubmitEditing={() => this.passwordInput.focus()}/>

                    <Text style={styles.labels}>Wachtwoord</Text>
                    <TextInput style={styles.input}
                        placeholder="Wachtwoord"
                        secureTextEntry
                        placeholderTextColor='#3d7ca9'
                        underlineColorAndroid="transparent"
                        ref={(input) => this.passwordInput = input}
                        onSubmitEditing={() => this.emailInput.focus()} />

                   <Text style={styles.labels}>Email (Optioneel)</Text>
                    <TextInput style={styles.input}
                        placeholder="Email"
                        placeholderTextColor='#3d7ca9'
                        underlineColorAndroid="transparent"
                        ref={(input) => this.emailInput = input} />
                        
                    

                    
                    

                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("Login", {})}>
                    <Text style={styles.buttonText}>REGISTREER</Text></TouchableOpacity>

            </View >
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
        marginTop: 100,
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
        paddingVertical: 25,
        height: 75,
        width: '100%'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});