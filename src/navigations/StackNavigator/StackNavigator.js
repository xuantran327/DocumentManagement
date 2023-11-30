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
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          name="Main"
          component={BottomNavigator}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />

        <Stack.Screen
          name="Demo"
          component={DemoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;