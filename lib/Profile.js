import {TextInput, View, StyleSheet, Dimensions, Text, Image, Style, Alert, ScrollView} from 'react-native';
import React, {Component} from "react";
import {Button, Grid, Col, Row, Container, Content} from 'native-base';
import FirebaseHelper from './firebaseHelper';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class ProfilePage extends Component {
  render() {
    return(
      <Container>
        <Text>
        Hi

        </Text>
      </Container>
    )
  };
}

const styles = StyleSheet.create({
  button: {
    width: width/3,
    height: height/5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

module.exports = ProfilePage;
