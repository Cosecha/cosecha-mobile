import React, { Component } from 'react';
import {
  TextInput as Input,
  StyleSheet,
  View
} from 'react-native';

class TextInput extends Component {
  render() {
    const { 
      value, 
      onChange, 
      keyboardType, 
      returnKeyType, 
      auto,
      autoCorrect,
      autoFocus,
      defaultValue,
    } = this.props;
    return (
      <View>

        <Input 
          value={value}
          onChange={onChange}
          style={styles.textInput}
          keyboardType={keyboardType || 'default'}
          returnKeyType={returnKeyType || 'go'}
          autoCorrect={autoCorrect || false}
          autoFocus={autoFocus || false }
          defaultValue={defaultValue}
        /> 

      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    color: '#fff',
    backgroundColor: 'rgba(59, 59, 59, 0.6)',
    height: 35,
    padding: 5,
  },
})

export default TextInput;
