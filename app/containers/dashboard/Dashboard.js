import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import FullScreenBackground from '../../components/layout/FullScreenBackground';

class Dashboard extends Component {
  render() {
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
    justifyContent: 'center',
  },
});

export default Dashboard;
