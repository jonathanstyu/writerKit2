import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import App from './src/mainApp';

export default class writerKit2 extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('writerKit2', () => writerKit2);
