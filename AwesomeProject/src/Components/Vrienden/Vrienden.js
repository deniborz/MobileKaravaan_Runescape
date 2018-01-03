import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {List, ListItem, SearchBar} from 'react-native-elements';
import AddVriend from '../Vrienden/AddVriend';
const util = require('util');

export default class Vrienden extends React.Component {
    static navigationOptions = {
        title: 'Vrienden',
    };
    constructor(props){
        super(props);
        this.state = {
          username: '',
          vrienden: [],
          alleVrienden: []
        }
        this.ToonVrienden();
    }

    render() {
        var { navigate } = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <View style={styles.friendList}>
                    <List automaticallyAdjustContentInsets={false}>
                            data={this.state.vrienden}
                            renderItem={({item}) => (
                                <ListItem
                                    containerStyle={{borderBottomColor: '#4d9280'}}
                                    roundAvatar
                                    title={item.Username}
                                    subtitle={item.Email}
                                    avatar={{uri: 'http://www.freeiconspng.com/uploads/profile-icon-9.png'}}
                                    />
                            )}
                            keyExtractor={item => item.Username}
                            ListHeaderComponent={this.renderHeader}
                        />
                    </List>
                </View>
                <TouchableOpacity style={styles.addFriends} onPress={() => navigate("AddVriend", {})}>
                    <Text style={styles.addFriendsText}>Voeg nieuwe vriend toe </Text>
                </TouchableOpacity>
            </View>

        );
    }

    renderHeader = () => {
        return <SearchBar placeholder="Search user" lightTheme containerStyle={{backgroundColor: '#e2e8e5'}} inputStyle={{backgroundColor: '#e2e8e5'}}/>
    }

    searchText = (e) => {
        const text = e.toLowerCase()
        /*const data = this.state.vrienden
        const filteredName = data.filter((item) => {
          return item.Username.toLowerCase().match(text)
        })
        if (!text || text === '') {
          this.setState({
            data: alleVrienden
          })
        } else if (!Array.isArray(filteredName) && !filteredName.length) {
          // set no data flag to true so as to render flatlist conditionally
          this.setState({
            vrienden: []
          })
        } else if (Array.isArray(filteredName)) {
          this.setState({
            noData: false,
            data: filteredName
          })
        }*/
      }

    ToonVrienden = () => {
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
                                const vrienden = data2.Vrienden;
                                if(vrienden[0] != null) {
                                    this.setState({vrienden: vrienden});
                                    this.setState({alleVrienden: vrienden});
                                }
                                return(vrienden);
                            }
                        });         
                    }
                }
            });
        }        
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d9280',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    friendList: {
        width: '100%',
        height: '100%',
        marginTop: '-6%',
        marginBottom: '20%',
    },
    addFriends: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: '100%',
        backgroundColor: '#e2e8e5',
        paddingVertical: 25,
        height: 75
    },
    addFriendsText: {
        textAlign: 'center',
        color: '#4d9280',
        fontSize: 25
    }
});