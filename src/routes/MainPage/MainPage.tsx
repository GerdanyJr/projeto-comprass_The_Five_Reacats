import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { mainPageOptions } from './MainPageOptions';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens/HomeScreen';
import { ProductScreen } from '../../screens/ProductScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function MainPage() {
  function HomeTabs() {
    return (
      <Tab.Navigator screenOptions={mainPageOptions.screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={mainPageOptions.mainOptions}
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

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
