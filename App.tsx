/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import { BackHandler } from 'react-native';


function App(): JSX.Element {
  const webViewRef = useRef(null);
  const handleBackButtonPress = () => {
    console.log('register back press', webViewRef)
    webViewRef.current?.goBack();
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress)
    return () => {
        BackHandler.removeEventListener("hardwareBackPress", handleBackButtonPress)
    };
}, []);


  return (
    <WebView
        source={{ uri: 'https://www.trillionbits.com/' }}
        ref={webViewRef}
        javaScriptEnabled={true}
        onLoadProgress={({ nativeEvent }) => {
          nativeEvent.progress;
        }}
    />
  );
}

export default App;
