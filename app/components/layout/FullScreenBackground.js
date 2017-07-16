import React, { Component } from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';

class FullScreenBackground extends Component {
  render() {
    const { image } = this.props;
    return (
      <Image
        source={image}
        style={styles.backgroundImage}
        >
        {this.props.children}
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
});

export default FullScreenBackground;