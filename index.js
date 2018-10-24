/** @format */

import {AppRegistry} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import App from './src/App';
import {name as appName} from './app.json';
import Router from './src/Router';

AppRegistry.registerComponent(appName, () => Router);
