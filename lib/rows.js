import React, {Component} from "react";
import {Button, Grid, Col, Row, Container, Content, Text} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import ImageButton from 'react-native-img-button';
import FirebaseHelper from './firebaseHelper';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class HomeGridRows extends Component{
  constructor (props) {
    super (props)
    console.log("Row Added")
    this.state = {email: "email", uri: "uri"}
    this.state = {firstName: "firstName", lastName: "lastName", userName: "userName"}
  }
  alertTest () {
    Alert.alert('Hi');
    FirebaseHelper.downloadImage()
  };

  render() {
    return (
      <Container>
      <Row>
        <Col>
        <ImageButton
          style={styles.button}
          appearance={{
              normal: {uri: 'https://firebasestorage.googleapis.com/v0/b/trial-of-firebase-a5e5b.appspot.com/o/Images%2F196678.jpg?alt=media&token=1b080db4-f069-4737-b16a-0e525385c897'},
              highlight: require('../lib/images/LetterC.png')}} />
        </Col>
        <Col>
          <ImageButton
            style={styles.button}
            appearance={{
              normal: require('../lib/images/LetterC.png'),
              highlight: require('../lib/images/LetterB.png'),
            } }
            onPress= {this.alertTest}/>
        </Col>
        <Col>
          <ImageButton
            style={styles.button}
            appearance={{
              normal: require('../lib/images/LetterD.png'),
              highlight: require('../lib/images/LetterB.png'),
            } }
            onPress= {this.alertTest}/>
        </Col>
      </Row>
      </Container>
    )
  }
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

module.exports= HomeGridRows
