import React from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';
import Login from './app/containers/login/Login';
import HomeScreen from './app/containers/home/HomeScreen';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: Login },
}, {
  initialRouteName: 'Home',
});

AppRegistry.registerComponent('App', () => App);

export default App;