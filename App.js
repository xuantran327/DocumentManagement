import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';
// import 'react-native-reanimated';
import 'react-native-screens';
import 'react-native-safe-area-context';
import '@react-native-community/masked-view';

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackNavigator from './src/navigations/StackNavigator/StackNavigator';

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return <StackNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
