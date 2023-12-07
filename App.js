import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';
// import 'react-native-reanimated';
import 'react-native-screens';
import 'react-native-safe-area-context';
import '@react-native-community/masked-view';

import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import StackNavigator from './src/navigations/StackNavigator/StackNavigator';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const checkSession = async () => {
    try {
      const sessionData = JSON.parse(await AsyncStorage.getItem('@session'));
      // console.log(sessionData);

      if (sessionData) {
        const currentTime = new Date().getTime();
        // console.log(currentTime);
        // console.log(sessionData.expiryTime);

        if (currentTime > sessionData.expiryTime) {
          // Session has expired, log the user out
          await AsyncStorage.removeItem('@session');
          setIsLoggedIn(false);
          // console.log(isLoggedIn);
        } else {
          // Session is still valid
          setIsLoggedIn(true);
          // console.log(isLoggedIn);
        }
      } else {
        setIsLoggedIn(false);
        // console.log(isLoggedIn);
      }
      setIsLoading(false);
    } catch (e) {
      // Handle error
      console.error(e);
    }
  };
  useEffect(() => {
    checkSession();
  }, []);

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  if (!isLoading) {
    return <StackNavigator isLoggedIn={isLoggedIn}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
