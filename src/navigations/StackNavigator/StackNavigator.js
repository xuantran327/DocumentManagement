import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../screens/LoginScreen';
import SearchScreen from '../../screens/SearchScreen';
import DemoScreen from '../../screens/DemoScreen';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import DetailScreen from '../../screens/DetailScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import IntroductionScreen from '../../screens/IntroductionScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = props => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = {props.isLoggedIn ? "Main" : "Login"}
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
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Introduction"
          component={IntroductionScreen}
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