import React, { useContext, useEffect, useState } from 'react';
import { MainPage } from './MainPage/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './Auth/AuthStack';
import { UserContext } from '../store/UserContext';
import { CheckoutStack } from './Checkout/CheckoutStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SplashScreen } from '../screens/SplashScreen';
import { Token } from '../types/interfaces/Token';
import { User } from '../types/interfaces/User';

const Stack = createNativeStackNavigator();
export function AppStack(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const userCtx = useContext(UserContext);
  useEffect(() => {
    async function getSession() {
      const fetchedToken = await AsyncStorage.getItem('token');
      const fetchedUser = await AsyncStorage.getItem('user');
      if (fetchedUser && fetchedToken) {
        const token: Token = JSON.parse(fetchedToken);
        const user: User = JSON.parse(fetchedUser);
        userCtx.authenticate(token, user);
      }
      setIsLoading(false);
    }
    getSession();
  }, []);
  return (
    <NavigationContainer>
      {isLoading && <SplashScreen />}
      {!isLoading && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="CheckoutStack" component={CheckoutStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
