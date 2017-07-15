import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

class HomeScreen extends Component {
  login() {
    console.log('Loggin in...');
  }
  render() {
    console.log('In HomeScreen');
    return (
      <View>
        <View>
          <Text style={styles.heading}>
            Welcome to Cosecha!
          </Text>
          <TouchableOpacity onPress={this.login.bind(this)} >
            <Text> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: '#cdcdcd',
    flex: 1,
    height: 30,
  }
});

export default HomeScreen;