import React from 'react';
import { MainPage } from './MainPage/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './Auth/AuthStack';
import { UserContextProvider } from '../store/UserContext';
import { CheckoutStack } from './Checkout/CheckoutStack';

const Stack = createNativeStackNavigator();
export function RootStack(): JSX.Element {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name='CheckoutStack' component={CheckoutStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}
