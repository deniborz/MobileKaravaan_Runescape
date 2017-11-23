import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Header from './Header';
import Footer from'./Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
          <Header />
          <Footer />
      </div>

    );
  }
}

const styles = StyleSheet.create({
  
});