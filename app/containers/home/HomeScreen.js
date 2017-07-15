import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  login() {
    console.log('Loggin in...');
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  render() {
    console.log('In HomeScreen');
    return (
      <View style={styles.container}>
        <View>

          <Text style={styles.paragraph}>
            This country depends on us!
          </Text>

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

  heading: {
    backgroundColor: '#cdcdcd',
    flex: 1,
    height: 30,
  },

  paragraph: {
    color: '#ffffff',
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '100',
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
});

export default HomeScreen;