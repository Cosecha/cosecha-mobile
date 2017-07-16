import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
    };
  }

  static navigationOptions = {
    title: 'Login',
  }

  render() {
    console.log('In Login');
    return (
      <View style={styles.container}>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#356c84',
    padding: 40,
  },

});

export default Login;