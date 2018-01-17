import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {List, ListItem, SearchBar} from 'react-native-elements';
import I18n from 'react-native-i18n';

import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class GroepPage extends React.Component {
    static navigationOptions = {
        title: 'GroepPage',
    };
    constructor(props){
        super(props);
        this.state={
            username: this.props.navigation.state.params.username,
            groupname: this.props.navigation.state.params.groupname,
            rekeningName: '',
        }
        
    }

    render() {

        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
           <Text style={styles.welcomeButtonText}>{I18n.t('greet')} {this.state.groupname.charAt(0).toUpperCase() + this.state.groupname.slice(1)}</Text> 
            <View style={styles.groupList}>
                <List automaticallyAdjustContentInsets={false}>
            <FlatList 
                data={this.state.groepen}
                renderItem={({item}) =>(
                  <ListItem 
                        containerStyle={{borderBottomColor: '#4d9280'}}
                        roundAvatar
                        component={TouchableHighlight}
                        title={item.Username}
                        title={item.Email}
                        avatar={{uri: 'http://www.freeiconspng.com/uploads/profile-icon-9.png'}}
                        onPress={() => navigate("Rekening", {name: this.state.rekeningName})} 
                  />
                )}
                keyExtractor={item => item.Username}
                //ListHeaderComponent={this.renderHeader}
                />
                </List>
                </View>
                <TouchableOpacity style={styles.addGroup} onPress={() => navigate("Rekening", {groupname: this.state.groupname})}>
                    <Text style={styles.addGroupText}>Voeg een nieuwe rekening toe </Text>
                </TouchableOpacity>

            </View>
        );
    }

    renderHeader = () => {
        return <SearchBar placeholder={I18n.t('searchgroup')} lightTheme onChangeText={this.searchText} containerStyle={{backgroundColor: '#e2e8e5'}} inputStyle={{backgroundColor: '#e2e8e5'}} style={styles.searchbar} />
    }

    searchText = (e) => {
        const text = e.toLowerCase();
        const data = this.state.alleGroepsleden;
        const filteredName = data.filter((item) => {
        return item.Username.toLowerCase().match(text)
        });
        if (!text || text === '') {
        this.setState({
            groepsleden: this.state.alleGroepsleden
        });
        } else if (!Array.isArray(filteredName) && !filteredName.length) {
        this.setState({
            groepsleden: []
        });
        } else if (Array.isArray(filteredName)) {
        this.setState({
            groepsleden: filteredName
        });
        }
    }

    ToonGroepsleden = () => {
        if (AsyncStorage.getItem(this.state.username)) {
            AsyncStorage.getItem(this.state.username)
            .then((value) => {
                let userData = JSON.parse(value);
                if(userData == null) {
                    alert("Er is een probleem met de actieve gebruiker.");
                }
                const groepsleden = userData.Groepsleden;
                console.log(groepsleden);
                if(groepsleden[0] != null) {
                    this.setState({groepsleden: groepsleden});
                    this.setState({Groepsleden: groepsleden});
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
        justifyContent: 'space-between'
    },
    groepen: {
        backgroundColor: '#545646',
        height: 75,
        marginBottom: 3
    },
    groeptext: {
        paddingHorizontal: 10
    },
    addGroup: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: '100%',
        backgroundColor: '#e2e8e5',
        paddingVertical: 25,
        height: '15%'
    },
    addGroupText: {
        textAlign: 'center',
        color: '#4d9280',
        fontSize: 25
    },
    lel: {
        fontSize: 50,
        marginTop: 50
    },
    groupList: {
        width: '100%',
        height: '90%',
        marginTop: '-6%'
      }
});