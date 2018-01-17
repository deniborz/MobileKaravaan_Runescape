import React from 'react';

import { StyleSheet, Text, View, Image, BackHandler, TouchableOpacity, Keyboard, AsyncStorage, FlatList} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import {List, ListItem, SearchBar} from 'react-native-elements';
import AddVriend from '../Vrienden/AddVriend';
import I18n from 'react-native-i18n';

const util = require('util');

export default class Vrienden extends React.Component {
    static navigationOptions = {
        title: 'Vrienden',
    };
    constructor(props){
        super(props);
        this.state = {
          username: this.props.navigation.state.params.username,
          vrienden: [],
          alleVrienden: []
        }
        Keyboard.dismiss();
    }

    componentWillMount() {
        this.ToonVrienden();
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.friendList}>
                    <List automaticallyAdjustContentInsets={false}>
                        <FlatList
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
                <TouchableOpacity style={styles.addFriends} onPress={() => navigate("AddVriend", {username : this.state.username})}>
                    <Text style={styles.addFriendsText}>{I18n.t('addfriend')}</Text>
                </TouchableOpacity>
            </View>

        );
    }

    renderHeader = () => {
        return <SearchBar placeholder="Search user" lightTheme onChangeText={this.searchText} containerStyle={{backgroundColor: '#e2e8e5'}} inputStyle={{backgroundColor: '#e2e8e5'}}/>
    }

    searchText = (e) => {
        const text = e.toLowerCase();
        const data = this.state.alleVrienden;
        const filteredName = data.filter((item) => {
          return item.Username.toLowerCase().match(text)
        });
        if (!text || text === '') {
          this.setState({
            vrienden: this.state.alleVrienden
          });
        } else if (!Array.isArray(filteredName) && !filteredName.length) {
          this.setState({
            vrienden: []
          });
        } else if (Array.isArray(filteredName)) {
          this.setState({
            vrienden: filteredName
          });
        }
    }

    ToonVrienden = () => {
        if (AsyncStorage.getItem(this.state.username)) {
            AsyncStorage.getItem(this.state.username)
            .then((value) => {
                let userData = JSON.parse(value);
                if(userData == null) {
                    alert("Er is een probleem met de actieve gebruiker.");
                }
                const vrienden = userData.Vrienden;
                console.log(vrienden);
                if(vrienden[0] != null) {
                    this.setState({vrienden: vrienden});
                    this.setState({alleVrienden: vrienden});
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
        height: '90%',
        marginTop: '-6%'
    },
    addFriends: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: '100%',
        backgroundColor: '#e2e8e5',
        paddingVertical: 25,
        height: '15%'
    },
    addFriendsText: {
        textAlign: 'center',
        color: '#4d9280',
        fontSize: 25
    }
});