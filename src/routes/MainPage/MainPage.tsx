import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { mainPageOptions } from './MainPageOptions';
import { HomeScreen } from '../../screens/HomeScreen';
import CartScreen from '../../screens/CartScreen';

const Tab = createBottomTabNavigator();
export function MainPage() {
  return (
    <Tab.Navigator screenOptions={mainPageOptions.screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={mainPageOptions.homeOptions}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={mainPageOptions.cartOptions}
      />
      <Tab.Screen
        name="Profile"
        component={View}
        options={mainPageOptions.profileOptions}
      />
      <Tab.Screen
        name="Product"
        component={View}
        options={{
          tabBarItemStyle: {display: 'none'},
          tabBarStyle:{display:'none'}
        }}
      />
    </Tab.Navigator>
  );
}
