import React from 'react';
import { StyleSheet, Text, Image, View, Picker, Button, Alert, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity, StatusBar, AsyncStorage, FlatList } from 'react-native';
import {List, ListItem, SearchBar} from 'react-native-elements';
import I18n from 'react-native-i18n';

import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groupname: this.props.navigation.state.params.groupname,
            rekeningname: this.props.navigation.state.params.rekeningname,
            name: '',
            vrienden: [],
            currency: '',
            date: '',
            wayOfSplit: '',
            bedrag: this.props.navigation.state.params.bedrag
        }
    }

    static navigationOptions = {
        title: 'Rekening',
        //headerStyle: {marginTop: -100}
    };

    divideBedragEvenely = () => {
        const bedrag = this.state.bedrag;
        const aantalLedel = this.state.vrienden.length;

        return bedrag/aantalLedel;
    }

    getVriendenVanGroep = () => {
        if (AsyncStorage.getItem(this.state.groupname)) {
            AsyncStorage.getItem(this.state.groupname)
                .then((value) => {
                    let groupData = JSON.parse(value);
                    if (groupData == null) {
                        alert("Er is een probleem met de actieve gebruiker.");
                    }
                    const groepsleden = groupData.vrienden;
                    console.log(groepsleden);
                    if (vrienden[0] != null) {
                        this.setState({ vrienden: groepsleden });
                    }
                });
            return vrienden;
        }
    }

        render() {
            var { navigate } = this.props.navigation;
            return (
                <View style={styles.container}>
                    <Text>{this.state.rekeningname}</Text>
                    <List automaticallyAdjustContentInsets={false}>
                        <FlatList
                            data={this.state.vrienden}
                            renderItem={({ item }) => (
                                <ListItem
                                    containerStyle={{ borderBottomColor: '#4d9280' }}
                                    roundAvatar
                                    title={item.Username}
                                    subtitle={this.divideBedragEvenely}
                                />
                            )}
                            keyExtractor={item => item.Username}
                            
                        />
                    </List>
                </View>

            );
        }
    
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#4d9280'
        },
        labels: {
            marginLeft: '10%',
            marginTop: 5,
            marginBottom: 5,
            color: '#e2e8e5'
        },
        input: {
            width: '80%',
            height: 30,
            backgroundColor: 'rgba(255,255,255,0.3)',
            paddingHorizontal: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#e2e8e5',
            color: '#e2e8e5',
            paddingVertical: 5,
            marginLeft: '10%'
        },
        addRekening: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 50,
            width: '100%',
            backgroundColor: '#e2e8e5',
            paddingVertical: 25,
            height: '15%'
        },
        addRekeningText: {
            textAlign: 'center',
            color: '#4d9280',
            fontSize: 25
        },
        picker: {
            width: '80%',
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#e2e8e5',
            color: '#e2e8e5',
            paddingVertical: 5,
            marginLeft: '10%'
        }
    });
