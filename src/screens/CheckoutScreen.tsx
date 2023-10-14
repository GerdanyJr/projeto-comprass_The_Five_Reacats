import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../assets/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../store/UserContext';
import { UnloggedAllert } from '../components/Checkout/UnloggedAllert';
import { ShippingAddresses } from '../components/Checkout/ShippingAddresses';
import { PaymenMethod } from '../components/Checkout/PaymentMethod';
import { DeliveryMethod } from '../components/Checkout/DeliveryMethod';
import { FormButton } from '../components/UI/FormButton';
import { Summary } from '../components/Checkout/Summary';

export function CheckoutScreen() {
  const navigation = useNavigation<any>();
  const userCtx = useContext(UserContext);

  function LoggedCheckout() {
    const [selectedDelivery, setSelectedDelivery] = useState<number | null>(
      null
    );

    function handleLogoPress(id: number) {
      setSelectedDelivery(id);
    }

    return (
      <View>
        <ShippingAddresses
          selectedAddress={userCtx.user?.shippingAdresses[0]}
        />
        <PaymenMethod />
        <DeliveryMethod
          selectedItem={selectedDelivery}
          onLogoPress={handleLogoPress}
        />
        <View style={styles.footer}>
          <Summary cart={userCtx.cart} />
          <FormButton title="Submit order" onPress={() => {}} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userCtx.isAuthenticated ? <LoggedCheckout /> : <UnloggedAllert />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  footer: {
    marginTop: 20,
    gap: 38,
  },
});
