import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {List, ListItem, SearchBar} from 'react-native-elements';

import Vrienden from '../Vrienden/Vrienden';
import { StackNavigator } from 'react-navigation';
const util = require('util');
export default class GroepPage extends React.Component {
    static navigationOptions = {
        title: 'GroepPage',
    };
    constructor(props){
        super(props);
        this.state={
            groupname: this.props.navigation.state.params.groupname,
            rekeningName: '',
        }
    }

    render() {

        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <List automaticallyAdjustContentInsets={false}>
            <FlatList 
                data={this.state.groepen}
                renderItem={({item}) =>(
                  <ListItem 
                        containerStyle={{borderBottomColor: '#4d9280'}}
                        roundAvatar
                        component={TouchableHighlight}
                        title={item.Groupname}
                        avatar={{uri: 'http://www.freeiconspng.com/uploads/profile-icon-9.png'}}
                        onPress={() => navigate("Rekening", {name: this.state.rekeningName})} 
                  />
                )}
                keyExtractor={item => item.Groupname}
                ListHeaderComponent={this.renderHeader}
                />
                </List>
                <TouchableOpacity style={styles.addGroup} onPress={() => navigate("Rekening", {})}>
                    <Text style={styles.addGroupText}>Voeg een nieuwe rekening toe </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

renderHeader = () => {
    return <SearchBar placeholder={I18n.t('searchgroup', {locale: this.getActiveUser.Language})} lightTheme containerStyle={{backgroundColor: '#e2e8e5'}} inputStyle={{backgroundColor: '#e2e8e5'}}/>
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
    }
});