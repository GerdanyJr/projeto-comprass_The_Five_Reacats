import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../../screens/LoginScreen';
import { View } from 'react-native';
import { SignUpScreen } from '../../screens/SignUpScreen';

const Stack = createNativeStackNavigator();
export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={View} />
    </Stack.Navigator>
  );
}
