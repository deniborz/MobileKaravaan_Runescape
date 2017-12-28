import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AddVriend from '../Vrienden/AddVriend';
const util = require('util');
export default class Vrienden extends React.Component {
    static navigationOptions = {
        title: 'Vrienden',
    };
    constructor(props){
        super(props);
        this.state = {
          username: 'efef',
          vrienden: []
         
        }
      }
    render() {
        var { navigate } = this.props.navigation;
        
        return (
            <View style={styles.container} >
            <View style={ styles.lel}>
            {this.ToonVrienden()}
            </View>
                <TouchableOpacity style={styles.addFriends} onPress={() => navigate("AddVriend", {})}>
                    <Text style={styles.addFriendsText}>Voeg nieuwe vrienden toe </Text>
                </TouchableOpacity>
            </View>

        );
    }
    ToonVrienden = () =>{
        var vrienden = [];
        if (AsyncStorage.getItem('activeUser')) {
            AsyncStorage.getItem('activeUser')
            .then((value) => {
                const data = JSON.parse(value);
                if(data == null) {
                alert("De gebruikersnaam/wachtwoord is ongeldig.");
                }
                else {
                    if (AsyncStorage.getItem(data.User)) {
                        AsyncStorage.getItem(data.User)
                        .then((value) => {
                            const data2 = JSON.parse(value);
                            if(data2 == null) {
                            alert("De gebruikersnaam is ongeldig.");
                            }
                            else {
                                vrienden = data2.Vrienden;
                                alert(data2.Vrienden);
                            }
                        });         
                    }
                }
            });         
        }
        for (var i = 0;i<vrienden.length;i++) {
            return(<Text> {vrienden[i]} {vrienden.length} </Text>)
        }
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
        height: 50,
        width: '100%',
        backgroundColor: '#245611',
        paddingVertical: 25,
        height: 75,
    },
    addFriendsText: {
        textAlign: 'center',
        color: 'white'
        
    },
    lel: {
        marginTop: 50,
    }
});