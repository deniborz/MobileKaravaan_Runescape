import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';

export default class Settings extends React.Component {
    static navigationOptions = {
        title: 'RegisterUser',
        headerStyle: {marginTop: -100}
    };

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            vrienden: []
        } 
    }

    UserRegistrationFunction = () =>{
        let newUser = {
            Username: this.state.username,
            Password: this.state.password,
            Email: this.state.email,
            Vrienden: this.state.vrienden
        };
        if(this.state.username == '' || this.state.password == ''){
            alert("Gebruikersnaam en wachtwoord zijn verplicht.")
        }
        else{
        AsyncStorage.getItem(this.state.username)
        .then((value) => {
          const data = JSON.parse(value);
          if (data == null) {
            AsyncStorage.setItem(newUser.Username, JSON.stringify(newUser));
            this.props.navigation.navigate('Login', {});
          }
          else {
            alert('username already taken');
          } 
        });
    }

    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <KeyboardAvoidingView behavior="position">
                    <Text style={styles.Title}>KARAVAAN   </Text>

                    <Text style={styles.labels}>Gebruikersnaam</Text>
                    <TextInput style={styles.input}
                        placeholder="Gebruikersnaam"
                        placeholderTextColor='#3d7ca9'
                        underlineColorAndroid="transparent"
                        onChangeText={(username) => this.setState({username})}
                        onSubmitEditing={() => this.passwordInput.focus()}/>

                    <Text style={styles.labels}>Wachtwoord</Text>
                    <TextInput style={styles.input}
                        placeholder="Wachtwoord"
                        secureTextEntry
                        placeholderTextColor='#3d7ca9'
                        underlineColorAndroid="transparent"
                        ref={(input) => this.passwordInput = input}
                        onChangeText={password => this.setState({password})}
                        onSubmitEditing={() => this.emailInput.focus()} />

                   <Text style={styles.labels}>Email (Optioneel)</Text>
                    <TextInput style={styles.input}
                        placeholder="Email"
                        placeholderTextColor='#3d7ca9'
                        underlineColorAndroid="transparent"
                        ref={(input) => this.emailInput = input} 
                        onChangeText={email => this.setState({email})}/>
                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.UserRegistrationFunction}>
                    <Text style={styles.buttonText}>REGISTREER</Text>
                </TouchableOpacity>

            </View >
        );
    }
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d9280',
    },
    Title: {
        left: '16%',
        marginTop: '20%',
        marginBottom: 25,
        fontSize: 50
    },
    labels: {
        marginLeft: '10%',
        marginTop: 5,
        marginBottom: 5,
        color: '#e2e8e5'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e2e8e5',
        color: '#e2e8e5',
        width: '80%',
        marginLeft: '10%'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#e2e8e5',
        paddingVertical: 25,
        height: 75,
        width: '100%'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});