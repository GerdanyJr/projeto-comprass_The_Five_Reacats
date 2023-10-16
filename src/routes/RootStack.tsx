import React from 'react';
import { MainPage } from './MainPage/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './Auth/AuthStack';

const Stack = createNativeStackNavigator();
export function RootStack(): JSX.Element {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
