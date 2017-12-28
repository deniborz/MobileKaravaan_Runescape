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

        if(this.state.username == ''){
            alert("De gebruikersnaam/wachtwoord is ongeldig.");
          }
          else{
      
          if (AsyncStorage.getItem(this.state.username)) {
            AsyncStorage.getItem(this.state.username)
            .then((value) => {
              const data = JSON.parse(value);
              if(data == null) {
                alert("Deze gebruiker bestaat niet");
              }
              else {
                var activeUser;
                AsyncStorage.getItem('activeUser')
                    .then((value) => {
                      const data2 = JSON.parse(value);
                      if(data2 == null) {
                        alert("Deze gebruiker bestaat niet");
                      }
                      else {
                        activeUser = data2.User;
                        AsyncStorage.getItem(activeUser).then((value) =>
                        {
                            const data3 = JSON.parse(value);
                            let user = data3;
                            user.Vrienden.push(this.state.username);

                            AsyncStorage.setItem(activeUser, JSON.stringify(data3), () => {
                                AsyncStorage.mergeItem(activeUser, JSON.stringify(user), () => {
                                    AsyncStorage.getItem(activeUser, (err, result) => {
                                        console.log(result);
                                      });
                                });
                              });
                            this.props.navigation.navigate("Vrienden", {});
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
                 placeholderTextColor= '#3d7ca9'
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
        backgroundColor: '#659ec7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addFriends: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#245611',
        paddingVertical: 25,
        height: 75,
    },
    addFriendsText: {
        textAlign: 'center',
        color: 'white'
    },
    addFriendInput: {
        position: 'absolute',
        top: '20%',
        left: '10%',
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '80%',
        borderRadius: 5
    }
});