import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Cosecha Mobile',
  }

  render() {
    console.log('In HomeScreen');
    return (
      <View>
        <View>
          <Text>Welcome to Cosecha!</Text>
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