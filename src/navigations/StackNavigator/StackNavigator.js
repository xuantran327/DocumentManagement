import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../screens/LoginScreen';
import SearchScreen from '../../screens/SearchScreen';
import DemoScreen from '../../screens/DemoScreen';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import DetailScreen from '../../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "Login"
        screenOptions={{
          tabBarActiveTintColor: 'green',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
          animation: 'fade',
          headerShown: false,
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomNavigator}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Demo"
          component={DemoScreen}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;