import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductScreen } from '../../screens/ProductScreen';
import { HomeTabs } from './HomeTabs';

const Stack = createNativeStackNavigator();
export function MainPage() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
