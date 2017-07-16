import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Image,
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
      <Image
        source={require('../../assets/bg.jpg')}
        style={styles.backgroundImage}
        >
        <View style={styles.container}>

              <View style={styles.overlay}>

                <Text style={styles.paragraph}>
                  This country depends on us!
                </Text>
                <View style={styles.logoContainer} >
                  <Image
                    source={require('../../assets/cosecha-logo.png')}
                    style={styles.logo}
                  />
                </View>

                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => this.login()} >


                  <Text style={styles.buttonText}>Login</Text>

                </TouchableOpacity>

              </View>

        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'rgba(53, 108, 132, 0.7)',
    padding: 30,
    flexDirection: 'column',
  },

  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },

  overlay: {
    flex: 1,
  },

  paragraph: {
    color: '#ffffff',
    marginTop: 30,
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

  logoContainer: {
    display: 'flex',
    marginBottom: 20,
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  logo: {
    width: 200,
    height: 200,
    flex: 0.2,
    display: 'flex',
    alignSelf: 'center',
  }
});

export default HomeScreen;