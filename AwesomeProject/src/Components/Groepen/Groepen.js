import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, TextInput, AsyncStorage, FlatList } from 'react-native';
import { observer } from 'mobx-react';
import Vrienden from '../Vrienden/Vrienden';
import NewGroep from '../Groepen/NewGroep';
import {List, ListItem, SearchBar} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
const util = require('util');
//@observer
export default class Groepen extends React.Component {
  static navigationOptions = {
    title: 'Groepen',
  };
constructor(props){
  super(props);
  this.state = {
    groupname: '',
    groepen: [],
    alleGroepen: []

  }
  this.setActiveUser();
  this.ToonGroepen();
}

  render() {
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text style={styles.welcomeButtonText}>Welkom {this.state.username}</Text> 
        <View style={styles.grouplist}>
          <List automaticallyAdjustContentInsets={false}>
            <FlatList 
                data ={this.state.groepen}
                renderItem={({item}) =>(
                  <ListItem 
                        containerStyle={{borderBottomColor: '#4d9280'}}
                        roundAvatar
                        title={item.Groupname}
                        avatar={{uri: 'http://www.freeiconspng.com/uploads/profile-icon-9.png'}}
                        />
                )}
                keyExtractor ={item =>item.Groupname}
                ListHeaderComponent={this.renderHeader}
                />
                </List>
                <TouchableOpacity style={styles.addFriends} onPress={() => navigate("NewGroep", {})}>
                    <Text style={styles.addFriendsText}>Voeg nieuwe vriend toe </Text>
                </TouchableOpacity>
        </View>
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

ToonGroepen = () => {
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
                        alert(data2.Groepen)
                          const groepen = data2.Groepen;
                          if(groepen[0] != null) {
                              this.setState({groepen: groepen});
                              this.setState({alleGroepen: groepen});
                          }
                          return(groepen);
                      }
                  });         
              }
          }
      });
  }        
}

setActiveUser = () => {
  if (AsyncStorage.getItem('activeUser')) {
      AsyncStorage.getItem('activeUser')
      .then((value) => {
          const data = JSON.parse(value);
          if(data == null) {
          alert("De gebruikersnaam/wachtwoord is ongeldig.");
          }
          else {
            this.setState({username: data.User});
          }
      });
    }
}


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#659ec7',
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
    width: '100%',
    backgroundColor: '#245611',
    paddingVertical: 25,
    height: 75,
  },
  addGroupText: {
    textAlign: 'center',
    color: 'white'
  },
  groupList: {
    width: '100%',
    height: '100%',
    marginTop: '-6%',
    marginBottom: '20%',
}
});
