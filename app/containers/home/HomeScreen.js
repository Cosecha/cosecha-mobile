import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Button from '../../components/ui/Button';
import FullScreenBackground from '../../components/layout/FullScreenBackground';

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
      <FullScreenBackground
        image={require('../../assets/bg.jpg')}
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

                <Button 
                  onPress={() => this.login()}
                  text={'Login'} 
                />

              </View>

        </View>
      </FullScreenBackground>
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