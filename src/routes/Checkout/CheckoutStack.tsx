import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckoutScreen } from '../../screens/CheckoutScreen';
import { ShippingAddressForm } from '../../components/Checkout/ShippingAddressForm';
import { CardForm } from '../../components/Checkout/CardForm';
import { checkoutStackOptions } from './CheckoutStackOptions';
import { CheckoutContextProvider } from '../../store/CheckoutContext';

const Stack = createNativeStackNavigator();
export function CheckoutStack() {
  return (
    <CheckoutContextProvider>
      <Stack.Navigator screenOptions={checkoutStackOptions.navigatorOptions}>
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen
          name="ShippingAddressForm"
          component={ShippingAddressForm}
          options={checkoutStackOptions.shippingAddress}
        />
        <Stack.Screen
          name="CardForm"
          component={CardForm}
          options={checkoutStackOptions.cardForm}
        />
      </Stack.Navigator>
    </CheckoutContextProvider>
  );
}
