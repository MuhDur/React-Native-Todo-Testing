import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import App from './App';
import AppIntro from './components/intro/AppIntro';
import LanguageSelect from './components/intro/LanguageSelect';


const RootStack = createStackNavigator(
    {
      Home: App,
      Intro: AppIntro,
    },
    {
        initialRouteName: 'Home',
    }
  );

export default class Router extends Component {
  render() {
    return <RootStack />;
  }
}

