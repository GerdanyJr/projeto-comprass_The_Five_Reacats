import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckoutScreen } from '../../screens/CheckoutScreen';
import { ShippingAddressForm } from '../../components/Checkout/ShippingAddressForm';
import { CardForm } from '../../components/Checkout/CardForm';
import { checkoutStackOptions } from './CheckoutStackOptions';
import { CheckoutContextProvider } from '../../store/CheckoutContext';
import { PaymentMethodForm } from '../../components/Checkout/PaymentMethodForm';
import SuccessScreen from '../../screens/SuccessScreen';
import { SuccessStack } from '../Success/SuccessStack';

const Stack = createNativeStackNavigator();
export function CheckoutStack() {
  return (
    <CheckoutContextProvider>
      <Stack.Navigator screenOptions={checkoutStackOptions.navigatorOptions}>
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={checkoutStackOptions.checkout}
        />
        <Stack.Screen
          name="ShippingAddressForm"
          component={ShippingAddressForm}
          options={checkoutStackOptions.shippingAddress}
        />
        <Stack.Screen
          name="PaymentMethodForm"
          component={PaymentMethodForm}
          options={checkoutStackOptions.cardForm}
        />
        <Stack.Screen
          name="CardForm"
          component={CardForm}
          options={checkoutStackOptions.cardForm}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Success" component={SuccessStack} />
      </Stack.Navigator>
    </CheckoutContextProvider>
  );
}
