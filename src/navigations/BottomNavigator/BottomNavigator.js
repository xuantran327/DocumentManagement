import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../../screens/HomeScreen';
import AccountScreen from '../../screens/AccountScreen';
import { Color } from '../../../styles/GlobalStyles';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: Color.colorGreen,
                headerStyle: {
                    backgroundColor: Color.colorGreen,
                },
                headerTitleStyle: {
                    color: Color.colorWhite,
                },
                tabBarStyle: {
                    backgroundColor: '#f2f2f2',
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" size={28} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default BottomNavigator;