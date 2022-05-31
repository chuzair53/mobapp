import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class Myweb extends Component {
  render() {
    return (
      <View>
<Text>Loaded Component</Text>
    <WebView source={{ uri: 'https://amforus.com/' }} />
</View>
    )
  }
}

export default Myweb