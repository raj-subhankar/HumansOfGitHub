import React, {Component} from 'react';
import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F6F6EF'
  }
});

class Webview extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url}/>
      </View>
    )
  }
};

Webview.propTypes = {
  url: React.PropTypes.string.isRequired
}

module.exports = Webview;
