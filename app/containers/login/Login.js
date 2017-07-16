import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';
import FullScreenBackground from '../../components/layout/FullScreenBackground';

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
      <FullScreenBackground
        image={require('../../assets/bg.jpg')}
      >
        <View style={styles.container}>


        </View>
      </FullScreenBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(53, 108, 132, 0.7)',
    padding: 40,
  },

});

export default Login;