import React, {Component} from 'react';
import Home from './Home';
import Login  from './login';
import RenderTest from './renderTest';
import ProfilePage from './Profile';
import UserProfile from './userProfile';
 import { StackNavigator } from 'react-navigation';
import { Notifications } from 'expo';
import {Text, StyleSheet, Dimensions} from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const RootStackNavigator = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
    RenderTest: {
      screen: RenderTest,
    },
    Profile: {
      screen: UserProfile,
    },
  },
);

class RootNavigator extends Component {

  render() {
    return (

      <RootStackNavigator />

  );
  }
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = RootNavigator
