import {TextInput, View, StyleSheet, Dimensions, Text, Image, Style, Alert, ScrollView} from 'react-native';
import React, {Component} from "react";
import {Button, Grid, Col, Row, Container, Content} from 'native-base';
import ImageButton from 'react-native-img-button';
import FirebaseHelper from './firebaseHelper';
import HomeGridRows from './rows';
import ProfilePage from './Profile';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


class HomeHeader extends Component {
  state={
    name: ''
  }
  componentWillMount() {
    FirebaseHelper.getCurrentUserName().then((snapshot) => {
      console.log(snapshot.val().firstName)
      this.setState({name: snapshot.val().firstName});
    });
  };

  render() {
    return (
    <Text>
      {this.state.name}
    </Text>
  )

  }
}

class Home extends Component{
  constructor (props) {
    super (props);
    this.state={firstName: 'Dummy'};

  };

  static navigationOptions = ({navigation, screenProps}) => ({
      title: <HomeHeader />,
      headerRight:
      (<Button onPress={() => {navigation.navigate('Profile')}}>
        <Text>
          Profile
        </Text>
      </Button>),

  });

  alertTest () {
    Alert.alert('Hi');
    FirebaseHelper.downloadImage()
  };

  componentDidMount() {
    FirebaseHelper.getCurrentUserName().then((snapshot) => {
      console.log(snapshot.val().firstName)
      this.setState({firstName: snapshot.val().firstName});
    });
  };

  render () {
    return (
    <Container>
    <Content style={{backgroundColor: 'white'}}>
      <Text>
        {this.state.firstName}
      </Text>
      <Button onPress={() => {this.props.navigation.navigate('Profile')}}>
        <Text>
          Profile
        </Text>
      </Button>
      <Grid>
        <HomeGridRows />
      </Grid>
      </Content>
    </Container>
      )
    }
  };

  const styles = StyleSheet.create({
    button: {
      width: width/3,
      height: height/5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    image: {
      width: width/3,
      height: height/5,
      justifyContent: 'center',
    },
  });


module.exports = Home;
