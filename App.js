import React from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/containers/login/Login';
import LoginCode from './app/containers/login/LoginCode';
import HomeScreen from './app/containers/home/HomeScreen';
import Dashboard from './app/containers/dashboard/Dashboard';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: Login },
  LoginCode: { screen: LoginCode },
  Dashboard: { screen: Dashboard },
}, {
  initialRouteName: 'LoginCode',
});

AppRegistry.registerComponent('App', () => App);

export default App;