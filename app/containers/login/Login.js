import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

class Login extends Component {
  static navigationOptions = {
    title: 'Cosecha Mobile',
  }

  login() {
    console.log('Loggin in...');
    const { navigate } = this.props.navigation;
    navigate('Home');
  }

  render() {
    console.log('In Login');
    return (
      <View style={styles.container}>

        <Text style={styles.paragraph}>
          This country depends on us!
        </Text>

        <View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.login()} >


            <Text style={styles.buttonText}>Login</Text>

          </TouchableOpacity>
        </View>
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

  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 4,
  },

  buttonText: {
    color: '#356c84',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },

  paragraph: {
    color: '#ffffff',
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '100',
  }
});

export default Login;