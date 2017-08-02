import {TextInput, View, StyleSheet, Dimensions} from 'react-native';
import {Button, Content, Container, Header, Text} from 'native-base';
import FirebaseHelper from './firebaseHelper';
import React, {Component} from "react";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {text: '', email: '', password: ''};
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <Container style={StyleSheet.flatten(styles.login2)}>
        <Content>
          <TextInput
           style={{height: 40}}
           placeholder="Your Email"
           onChangeText={(email) => this.setState({email})}
           />

          <TextInput
           style={{height: 40}}
           placeholder="Password"
           onChangeText={(password) => this.setState({password})}
           />

          <Button
           onPress={() => {FirebaseHelper.signup( this.state.email, this.state.password, navigate )}} >
             <Text>
              Sign Up
            </Text>
            </Button>

          <Button
            onPress={() => {FirebaseHelper.login( this.state.email, this.state.password, navigate)}}
            style={{padding: 10}}>
            <Text>
              Login
            </Text>
          </Button>
          <Button
            onPress={() => {navigate('Home')}}
            style={{padding: 10}}>
            <Text>
              Home
            </Text>
          </Button>

        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  login2: {
    backgroundColor: 'white',
    width: width,
    flex: 1,
    alignItems: 'center',
  },
  login: {
    //flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    width: width/2,
    flex: 1,
    justifyContent: 'center',
  },
});

module.exports = Login;
