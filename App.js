import React from 'react';
import {StyleSheet, Text, View, CameraRoll, Button, Navigator, Platforms, StatusBar} from 'react-native';
import {StackNavigator} from 'react-navigation';
import RootNavigator from './lib/RootNavigation';
import Home from './lib/Home';
import * as firebase from "firebase";
import FirebaseHelper from "./lib/firebaseHelper";
import Login from "./lib/login";
import {Container} from 'native-base';
export default class App extends React.Component {

    constructor(props) {
      super(props);
      FirebaseHelper.initialise();
    }

  render() {
    return (
      <Container>
          <RootNavigator style={styles.RootStackNavigator} />
      </Container>
      );
    }
  }; 


const styles = StyleSheet.create({
  RootStackNavigator: {
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

});
