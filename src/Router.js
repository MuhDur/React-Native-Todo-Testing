import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import App from './App';
import AppIntro from './components/intro/AppIntro';
import LanguageSelect from './components/intro/LanguageSelect';
import HomeTabs from './components/home/HomeTabs';


const RootStack = createStackNavigator(
    {
      Home: App,
      Intro: AppIntro,
      Start: HomeTabs
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

