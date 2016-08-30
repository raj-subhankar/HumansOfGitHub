import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  separator: {
    height: 1,
    marginLeft: 15,
    flex: 1,
    backgroundColor: '#E4E4E4'
  }
});

class Separator extends Component {
  render() {
    return (
      <View style={styles.separator}/>
    )
  }
};

module.exports = Separator;
