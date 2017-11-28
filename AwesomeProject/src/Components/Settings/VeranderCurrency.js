import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Picker } from 'react-native';

class VeranderCurrency extends React.Component {
  static navigationOptions= {
    title: 'VeranderCurrency',
};
    state = {currency: ''}
    updateCurrency = (currency) => {
       this.setState({ currency: currency })
    }
  render() {
    return (
      <View style={styles.container}>
        <Picker selectedValue = {this.state.currency} onValueChange = {this.updateCurrency}>
               <Picker.Item label = "Euro" value = "€" />
               <Picker.Item label = "Dollar" value = "$" />
               <Picker.Item label = "Pound" value = "£" />
            </Picker>
            <Text style = {styles.text}>{this.state.currency}</Text>
      
      </View>
    );
  }
}
export default VeranderCurrency
const styles = StyleSheet.create({
 
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
  }
});