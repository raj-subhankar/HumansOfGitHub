/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var Main = require('./App/Components/Main');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
})

class humansofgithub extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute = {{
          title: "Humans of Github",
          component: Main
        }}
      />
    );
  }
}

AppRegistry.registerComponent('humansofgithub', () => humansofgithub);
