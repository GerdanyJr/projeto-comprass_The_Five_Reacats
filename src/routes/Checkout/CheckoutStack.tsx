import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CheckoutScreen } from '../../screens/CheckoutScreen';
import { useNavigation } from '@react-navigation/native';
import { ShippingAddressForm } from '../../components/Checkout/ShippingAddressForm';
import { GoBackButton } from '../../components/UI/GoBackButton';

const Stack = createNativeStackNavigator();
export function CheckoutStack() {
  const navigation = useNavigation<any>();
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <GoBackButton
            black
            onPress={() => {
              navigation.goBack();
            }}
          />
        ),
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 22, fontWeight: '700' },
      })}
    >
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen
        name="ShippingAddressForm"
        component={ShippingAddressForm}
        options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
}
