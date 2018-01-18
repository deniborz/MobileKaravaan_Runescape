import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';

import Vrienden from '../Vrienden/Vrienden';
import I18n from 'react-native-i18n';

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
            vrienden: [],
            language: 'en',
            currency: 'EUR',
            groepen: []
        } 
    }

    UserRegistrationFunction = () =>{
        let newUser = {
            Username: this.state.username,
            Password: this.state.password,
            Email: this.state.email,
            Vrienden: this.state.vrienden,
            Language: this.state.language,
            Currency: this.state.currency,
            Groepen: this.state.groepen
        };
        if(this.state.username == '' || this.state.password == ''){
            alert("Username and/or password are required.")
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

                    <Text style={styles.labels}>{I18n.t('username')}</Text>
                    <TextInput style={styles.input}
                        placeholder={I18n.t('username')}
                        placeholderTextColor='#e2e8e5'
                        underlineColorAndroid="transparent"
                        onChangeText={(username) => this.setState({username})}
                        onSubmitEditing={() => this.passwordInput.focus()}/>

                    <Text style={styles.labels}>{I18n.t('password')}</Text>
                    <TextInput style={styles.input}
                        placeholder={I18n.t('password')}
                        secureTextEntry
                        placeholderTextColor='#e2e8e5'
                        underlineColorAndroid="transparent"
                        ref={(input) => this.passwordInput = input}
                        onChangeText={password => this.setState({password})}
                        onSubmitEditing={() => this.emailInput.focus()} />

                   <Text style={styles.labels}>Email (Optional)</Text>
                    <TextInput style={styles.input}
                        placeholder="Email"
                        placeholderTextColor='#e2e8e5'
                        underlineColorAndroid="transparent"
                        ref={(input) => this.emailInput = input} 
                        onChangeText={email => this.setState({email})}/>
                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.UserRegistrationFunction}>
                    <Text style={styles.buttonText}>REGISTER</Text>
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
        fontSize: 50,
        color: '#e2e8e5'
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
        color: '#4d9280'
    }
});