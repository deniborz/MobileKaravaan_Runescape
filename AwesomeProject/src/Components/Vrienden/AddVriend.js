import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, AsyncStorage } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Vrienden from '../Vrienden/Vrienden';
const util = require('util');
const backAction = NavigationActions.back({key: 'Vrienden'});

export default class AddVriend extends React.Component {
    static navigationOptions = {
        title: 'AddVriend',
    };
    constructor(props){
        super(props);
        this.state = {
          username: '',
        }
      }

    addFriend = () => {

        if(this.state.username == '') alert("De gebruikersnaam is ongeldig.");
        else{
          if (AsyncStorage.getItem(this.state.username)) {
            AsyncStorage.getItem(this.state.username)
            .then((value) => {
              const data = JSON.parse(value);
              if(data == null) {
                alert("Deze gebruiker bestaat niet.");
              }
              else {
                let activeUser;
                AsyncStorage.getItem('activeUser')
                    .then((value) => {
                      const data2 = JSON.parse(value);
                      if(data2 == null || this.state.username == data2.User) {
                        alert("Deze gebruiker is ongeldig.");
                      }
                      else {
                        activeUser = data2.User;
                        AsyncStorage.getItem(activeUser).then((value) =>
                        {
                            const data3 = JSON.parse(value);
                            const user = data3;
                            let checkExists = false;
                            for (const person of user.Vrienden) {
                                if(person.Username == this.state.username) {
                                    alert("Deze gebruiker is al een vriend.");
                                    checkExists = true;
                                }
                            }
                            if(!checkExists) {
                                user.Vrienden.push(data);

                                AsyncStorage.setItem(activeUser, JSON.stringify(data3), () => {
                                    AsyncStorage.mergeItem(activeUser, JSON.stringify(user), () => {
                                        AsyncStorage.getItem(activeUser, (err, result) => {
                                            console.log(result);
                                        });
                                    });
                                });
                                this.props.navigation.navigate("Vrienden", {});
                            }
                        }
                        )}
                      
                    }); 
              }
              
            });         
          }
        }  
    } 

    render() {
        var {navigate } = this.props.navigation;

        return (
            <View style={styles.container} >
                <TextInput style={styles.addFriendInput}
                 placeholder="Enter username of friend"
                 placeholderTextColor='#e2e8e5'
                 underlineColorAndroid="transparent"
                 onChangeText={(username) => this.setState({username})} />
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
        backgroundColor: '#4d9280',
        alignItems: 'center'
    },
    addFriends: {
        backgroundColor: '#e2e8e5',
        paddingVertical: 10,
        borderRadius: 5,
        height: 55,
        width: '80%'
    },
    addFriendsText: {
        textAlign: 'center',
        color: '#4d9280',
        marginTop: 6,
        fontSize: 15,
        fontWeight: '500'
    },
    addFriendInput: {
        marginTop: 200,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e2e8e5',
        color: '#e2e8e5',
        width: '80%'
    }
});