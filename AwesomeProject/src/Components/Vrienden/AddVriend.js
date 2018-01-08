import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, AsyncStorage } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Vrienden from '../Vrienden/Vrienden';
import Overzicht from '../Overzicht/Overzicht';
const util = require('util');
const backAction = NavigationActions.back({key: 'Vrienden'});

export default class AddVriend extends React.Component {
    static navigationOptions = {
        title: 'Add Friend',
    };
    constructor(props){
        super(props);
        this.state = {
            username: this.props.navigation.state.params.username,
            friendUsername: ''
        }
    }

    componentWillMount() {
        this.props.navigation.dispatch(backAction);
    }

    addFriend = () => {
        if(this.state.friendUsername == '') alert("De gebruikersnaam is ongeldig.");
        else{
            if (AsyncStorage.getItem(this.state.friendUsername)) {
                AsyncStorage.getItem(this.state.friendUsername)
                  .then((value) => {
                    const friendData = JSON.parse(value);
                    if(friendData == null) {
                        alert("Deze gebruiker bestaat niet.");
                    }
                    else {
                        if (AsyncStorage.getItem(this.state.username)) {
                            AsyncStorage.getItem(this.state.username)
                            .then((value) => {
                                const userData = JSON.parse(value);
                                let checkExists = false;
                                if(userData == null || this.state.friendUsername == userData.Username) {
                                    alert("Deze gebruiker is ongeldig.");
                                    checkExists=true;
                                }
                                const activeUser = userData;
                                const friend = friendData;
                                for (const person of activeUser.Vrienden) {
                                    if(person.Username == friend.Username) {
                                        alert("Deze gebruiker is al een vriend.");
                                        checkExists = true;
                                    }
                                }
                                if(!checkExists) {
                                    activeUser.Vrienden.push(friendData);
                                    /*friend.Vrienden.push(activeUser);
                                            AsyncStorage.setItem(friend.Username, JSON.stringify(friendData), () => {
                                                AsyncStorage.mergeItem(friend.Username, JSON.stringify(friend));
                                            });*/
            
                                    AsyncStorage.setItem(activeUser.Username, JSON.stringify(userData), () => {
                                        AsyncStorage.mergeItem(activeUser.Username, JSON.stringify(activeUser), () => {
                                            this.props.navigation.navigate("Vrienden", {username : this.state.username});
                                        });
                                    });
                                }
                            });
                        }
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
                 onChangeText={(friendUsername) => this.setState({friendUsername})} />
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