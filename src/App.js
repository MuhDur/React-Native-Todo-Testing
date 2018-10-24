/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LanguageSelect from './components/intro/LanguageSelect';
import HomeTabs from './components/home/HomeTabs';
import AppIntro from './components/intro/AppIntro';
const Realm = require('realm');
const backgroundPic = require('./assets/pics/introbackground.jpg');




const UserInfo = {
  name: 'userinfo',
  properties: {
    language:  'string',
    languageChosen: 'string'       // as in 'yes' or 'no'
    //model: 'string',
    //miles: {type: 'int', default: 0},
  }
};


export default class App extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { realm: null, languageChosen: null };
  }

  componentWillMount() {

    Realm.open({
      schema: [UserInfo]
    }).then(realm => {
      const PersonInfo = realm.objects('userinfo');
      if(PersonInfo.length == 0) {
        this.setState({ languageChosen: false });
      } else {
        this.setState({ languageChosen: true });
      }
      
    });


    // erstes mal hier?
    // this.initUser();   oder sowas?!

    /*
    Realm.open({
      schema: [UserInfo]
    }).then(realm => {
      const PersonInfo = realm.objects('userinfo');

      if(PersonInfo.language == 'Bosanski' || PersonInfo.language == 'English' || PersonInfo.language == 'Deutsch') {
        this.setState()
      }
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'});
      });
      this.setState({ realm });
    });*/
  }

  
  /*
    // nochmal alles überdenken, wie funktioniert das mit Realm?
    was muss ich gleich am Anfang machen?

    Ich will beim 1.Start einen "User anlegen", heist ein Datenbankeintrag von ihm machen
    dort steht zB in welcher Sprache seine App laufen soll.
    
  */

  renderStartConditional() {
    if (this.state.languageChosen === false) {
      return <LanguageSelect />;
    } else {
      return <HomeTabs />;
    }
  }

  render() {
    return (
      
      <View style={styles.container}>

        <ImageBackground
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          resizeMode='cover'
          source={backgroundPic}
        >
          {this.renderStartConditional()}
        </ImageBackground>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


