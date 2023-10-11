import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { mainPageOptions } from './MainPageOptions';

const Tab = createBottomTabNavigator();
export function MainPage() {
  return (
    <Tab.Navigator screenOptions={mainPageOptions.screenOptions}>
      <Tab.Screen
        name="Home"
        component={View}
        options={mainPageOptions.homeOptions}
      />
      <Tab.Screen
        name="Cart"
        component={View}
        options={mainPageOptions.cartOptions}
      />
      <Tab.Screen
        name="Profile"
        component={View}
        options={mainPageOptions.profileOptions}
      />
    </Tab.Navigator>
  );
}
