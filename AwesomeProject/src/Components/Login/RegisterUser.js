import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';

export default class Settings extends React.Component {
    static navigationOptions = {
        title: 'RegisterUser',
        headerStyle: {marginTop: -100}
    };

    constructor(props) {
        
           super(props)
        
           this.state = {
        
             Username: '',
             Email: '',
             Password: ''
        
           }
        
    }

    UserRegistrationFunction = () =>{
        
        const { Username }  = this.state ;
        const { Email }  = this.state ;
        const { Password }  = this.state ;
        
       fetch('http://localhost:3000/users/register', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
        
           name: Username,
        
           email: Email,
        
           password: Password
        
         })
        
       }).then((response) => response.json())
             .then((responseJson) => {
        
       // Showing response message coming from server after inserting records.
               Alert.alert(responseJson);
        
             }).catch((error) => {
               console.error(error);
             });
        
        
    }

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
                        onChangeText={Username => this.setState({Username})}
                        onSubmitEditing={() => this.passwordInput.focus()}/>

                    <Text style={styles.labels}>Wachtwoord</Text>
                    <TextInput style={styles.input}
                        placeholder="Wachtwoord"
                        secureTextEntry
                        placeholderTextColor='#3d7ca9'
                        underlineColorAndroid="transparent"
                        ref={(input) => this.passwordInput = input}
                        onChangeText={Password => this.setState({Password})}
                        onSubmitEditing={() => this.emailInput.focus()} />

                   <Text style={styles.labels}>Email (Optioneel)</Text>
                    <TextInput style={styles.input}
                        placeholder="Email"
                        placeholderTextColor='#3d7ca9'
                        underlineColorAndroid="transparent"
                        ref={(input) => this.emailInput = input} 
                        onChangeText={Email => this.setState({Email})}/>
                    

                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.UserRegistrationFunction}>
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