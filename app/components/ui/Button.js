import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity,
} from 'react-native';

class Button extends Component { 
  render() {
    const { onPress, text } = this.props;
    return (
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
       >

        <Text style={styles.buttonText}>{text}</Text>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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
})

export default Button;
