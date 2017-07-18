import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';
import FullScreenBackground from '../../components/layout/FullScreenBackground';
import {
  Button,
  TextInput,
} from '../../components/ui';
import axios from 'axios';

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

  changePhone(v) {
    console.log(`Value: ${v}`);
    console.log(v);
    this.setState({ phone: v});
  }

  startLogin() {
    const { phone } = this.state;
    const { navigate } = this.props.navigation;
    console.log(`Loggin in phone: ${phone}`);
    axios.post('http://localhost:5050/api/session', { phone })
      .then((res) => {
        console.log(res);
        navigate('LoginCode');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log('In Login');
    const { phone } = this.state;
    return (
      <FullScreenBackground
        image={require('../../assets/bg.jpg')}
      >
        <View style={styles.container}>
          <View 
            style={styles.phoneInput}
          >
            <TextInput
              value={phone}
              onChange={(event) => this.setState({ phone: event.nativeEvent.text})}
              keyboardType={'phone-pad'}
              returnKeyType={'next'}
              defaultValue='Your phone number'
            />
          </View>

          <Button 
            text='Login'
            onPress={() => this.startLogin()}
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

  phoneInput: {
    marginBottom: 20,
  },

});

export default Login;