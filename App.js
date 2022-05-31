import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { NativeWebView } from './components/native-webview';
import Myweb, {MyWeb} from './components/Myweb';



export default function App() {
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://amforus.com' }}
    />
    // <WebView source={{ uri: 'https://reactnative.dev/' }} />
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:30

  },

  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1
  }
});
