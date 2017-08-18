import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftPanel}>
          
        </View>

        <View style={styles.rightPanel}>
          <Text style={styles.welcome}>
            You want to have content here
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  leftPanel: {
    flex: 1
  },
  rightPanel: {
    flex: 2
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
