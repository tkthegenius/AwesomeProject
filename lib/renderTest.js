import {Container, Text, Button} from 'native-base';
import {TextInput} from 'react-native';
import React, {Component} from "react";
import FirebaseHelper from './firebaseHelper';
class RenderTest extends Component {
  constructor (props){
    super (props)
    this.state= {firstName: '', lastName: '', userName: ''}
  }
  navigate(options) {this.props.navigation.navigate(options)}
  saveUserInfo() {
    FirebaseHelper.setUserInfo(this.state.firstName, this.state.lastName, this.state.userName)
    this.navigate('Home', {})
  }

render() {
  return(
    <Container>

      <Text>
        Thank you for signing up with the email: {FirebaseHelper.getCurrentUser()}
      </Text>
      <TextInput
        style = {{height: 16, backgroundColor: 'white'}}
        placeholder="FirstName"
        onChangeText={(firstName)=>this.setState({firstName})}
      />
      <TextInput
        style = {{height: 16, backgroundColor: 'white'}}
        placeholder="LastName"
        onChangeText={(lastName)=>this.setState({lastName})}
      />
      <TextInput
        style = {{height: 16, backgroundColor: 'white'}}
        placeholder= "UserName"
        onChangeText={(userName)=>this.setState({userName})}
      />

      <Button
        onPress={() => this.saveUserInfo()}>
        <Text>
          Done
        </Text>
      </Button>
    </Container>
  )
};
}


module.exports = RenderTest;
