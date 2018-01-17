import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TouchableHighlight, ScrollView, TextInput, AsyncStorage, FlatList } from 'react-native';
import { observer } from 'mobx-react';
import Vrienden from '../Vrienden/Vrienden';
import NewGroep from '../Groepen/NewGroep';
import {List, ListItem, SearchBar} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import I18n from 'react-native-i18n';

const util = require('util');
//@observer
export default class Groepen extends React.Component {
  static navigationOptions = {
    title: 'Groepen',
  };
  constructor(props){
    super(props);
    this.state = {
      username: this.props.navigation.state.params.username,
      groupname: '',
      groepen: [],
      alleGroepen: []
    }
  }

  componentWillMount(){
    this.ToonGroepen();
  }

  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.groupList}>
          <List automaticallyAdjustContentInsets={false}>
            <FlatList 
                data={this.state.groepen}
                renderItem={({item}) =>(
                  <ListItem 
                        containerStyle={{borderBottomColor: '#4d9280'}}
                        roundAvatar
                        component={TouchableHighlight}
                        title={item.Groupname}
                        avatar={{uri: 'http://www.freeiconspng.com/uploads/black-white-group-png-icon-3.png'}}
                        onPress={() => navigate("GroepPage", {groupname: item.Groupname, username : this.state.username})} 
                  />
                )}
                keyExtractor={item => item.Groupname}
                ListHeaderComponent={this.renderHeader}
                />
                </List>
        </View>
        <TouchableOpacity style={styles.addGroups} onPress={() => navigate("NewGroep", {username : this.state.username})}>
          <Text style={styles.addGroupsText}>{I18n.t('addgroup')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  getActiveUser = () => { 
    if (AsyncStorage.getItem('activeUser')) {
     AsyncStorage.getItem('activeUser')
     .then((value) => {
          const user = JSON.parse(value);});
    }
    return user;
  }
  
  renderHeader = () => {
    return <SearchBar placeholder={I18n.t('searchgroup')} onChangeText={this.searchText} lightTheme containerStyle={{backgroundColor: '#e2e8e5'}} inputStyle={{backgroundColor: '#e2e8e5'}}/>
}

searchText = (e) => {
  const text = e.toLowerCase()
  const data = this.state.alleGroepen
  const filteredName = data.filter((item) => {
    return item.Groupname.toLowerCase().match(text)
  })
  if (!text || text === '') {
    this.setState({
      groepen: this.state.alleGroepen
    })
  } else if (!Array.isArray(filteredName) && !filteredName.length) {
    this.setState({
      groepen: []
    })
  } else if (Array.isArray(filteredName)) {
    this.setState({
      groepen: filteredName
    });
  }
}

ToonGroepen = () => {
  if (AsyncStorage.getItem(this.state.username)) {
    AsyncStorage.getItem(this.state.username)
    .then((value) => {
        let userData = JSON.parse(value);
        if(userData == null) {
            alert("Er is een probleem met de actieve gebruiker.");
        }
        const groepen = userData.Groepen;
        console.log(groepen);
        if(groepen[0] != null) {
            this.setState({groepen: groepen});
            this.setState({alleGroepen: groepen});
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
  groupList: {
    width: '100%',
    height: '90%',
    marginTop: '-6%'
  },
  addGroups: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 50,
    width: '100%',
    backgroundColor: '#e2e8e5',
    paddingVertical: 25,
    height: '15%'
  },
  addGroupsText: {
    textAlign: 'center',
    color: '#4d9280',
    fontSize: 25
  }
});
