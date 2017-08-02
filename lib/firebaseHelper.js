import * as firebase from "firebase";

import {Alert} from 'react-native';

class FirebaseHelper {

  static downloadImage() {
    let storage = firebase.storage();
    let pathReference = storage.ref('https://firebasestorage.googleapis.com/v0/b/trial-of-firebase-a5e5b.appspot.com/o/Images')
    gsReference.getDownloadURL().then(function(url) {
      // Insert url into an <img> tag to "download"
      console.log(url);
    });;
    console.log("firebase")

  }

  static setUserInfo(firstName, lastName, userName) {
    console.log ("name")

    var result = firebase.database().ref(FirebaseHelper.userDetailsURI()).set({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
    });
  }


  static userDetailsURI() {
    return "/user/" + FirebaseHelper.getDBUserEmail() + "/details";
  }

  static getDBUserEmail() {
    return FirebaseHelper.getCurrentUser().replace(/\./g,'|')
  }

  static setUserUri(email, uri) {
      console.log ("uri")
      console.log (email)
        let userUri = "/user/" + email + "/details";
        var result = firebase.database().ref(userUri).set({
            email: email,
        });
        Alert.alert('saved');
    }


  static async signup(email, pass, navigate) {

      try {
          await firebase.auth()
              .createUserWithEmailAndPassword(email, pass);

          console.log("Account created");
          Alert.alert('Account created');
          navigate ('RenderTest',)

      } catch (error) {
          console.log(error.toString());
          Alert.alert(error.toString());

      }

  }

  static async login(email, pass, navigate) {

      try {
          await firebase.auth()
              .signInWithEmailAndPassword(email, pass);

          console.log("Logged In!");
          navigate ('Home',)
          // Navigate to the Home page

      } catch (error) {
          console.log(error.toString());
          Alert.alert(error.toString());
      }

  }

  static getCurrentUserName() {
    console.log(FirebaseHelper.userDetailsURI())
    return firebase.database().ref(FirebaseHelper.userDetailsURI()).once('value')
  }

  static getCurrentUser() {

    return(
      firebase.auth().currentUser.email
    )
  }


  static async logout() {

    try {

        await firebase.auth().signOut();

        // Navigate to login view

    } catch (error) {
        console.log(error);
    }

  }

  static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyCpH-elpO-h6kgrizWsfpyzqfX8Go6tVK0",
    authDomain: "trial-of-firebase-a5e5b.firebaseapp.com",
    databaseURL: "https://trial-of-firebase-a5e5b.firebaseio.com",
    storageBucket: "trial-of-firebase-a5e5b.appspot.com",
        });
    }

}

module.exports = FirebaseHelper;
