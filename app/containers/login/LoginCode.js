import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Button,
  TextInput,
} from '../../components/ui';
import FullScreenBackground from '../../components/layout/FullScreenBackground';

class LoginCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginCode: '',
    };
  }

  submitLoginCode() {
    const { loginCode } = this.state;
    console.log(`Login Code: ${loginCode}`);
  }

  render() {
    const { loginCode } = this.state;
    return (
      <FullScreenBackground
        image={require('../../assets/bg.jpg')}
      >

        <View 
          style={styles.container}
        >
          <Text style={styles.text}>Your Login Code:</Text>
          <View style={styles.input}>
            <TextInput
              value={loginCode}
              onChange={(event) => this.setState({ loginCode: event.nativeEvent.text})}
              keyboardType={'keyboard'}
              returnKeyType={'next'}
              defaultValue='Your Login Code'
            />
          </View>

          <Button 
            text='Submit'
            onPress={() => this.submitLoginCode()}
          />
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
    justifyContent: 'center',
  },
  
  text: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },

  input: {
    marginBottom: 10,
  },
})

export default LoginCode;
