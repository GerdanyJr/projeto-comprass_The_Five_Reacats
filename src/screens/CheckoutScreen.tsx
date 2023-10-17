import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../assets/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../store/UserContext';
import { UnloggedAllert } from '../components/Checkout/UnloggedAllert';
import { ShippingAddresses } from '../components/Checkout/ShippingAddresses';
import { PaymentMethod } from '../components/Checkout/PaymentMethod';
import { DeliveryMethods } from '../components/Checkout/DeliveryMethods';
import { FormButton } from '../components/UI/FormButton';
import { Summary } from '../components/Checkout/Summary';
import { CheckoutContext } from '../store/CheckoutContext';
import { useTranslation } from 'react-i18next';

export function CheckoutScreen() {
  const navigation = useNavigation<any>();
  const { t } = useTranslation();
  const userCtx = useContext(UserContext);
  const { deliveryMethod, paymentMethod, shippingAddress } =
    useContext(CheckoutContext);

  function LoggedCheckout() {
    return (
      <View>
        <ShippingAddresses />
        <PaymentMethod />
        <DeliveryMethods />
        <View style={styles.footer}>
          <Summary cart={userCtx.cart} />
          <FormButton
            title={t('summary.submitOrder')}
            onPress={() => {}}
            disabled={
              deliveryMethod === null ||
              paymentMethod === null ||
              shippingAddress === null
            }
          />
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
  translucentBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});