import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { CheckoutContext } from '../../store/CheckoutContext';
import { GenericPaymentMethod } from './GenericPaymentMethod';
import { hideCardNumber } from '../../util/formatter';
import { useTranslation } from 'react-i18next';

export function PaymentMethod() {
  const navigation = useNavigation<any>();
  const { paymentMethod, creditCard } = useContext(CheckoutContext);
  const { t } = useTranslation();

  function handlePaymentPress() {
    navigation.navigate('PaymentMethodForm');
  }

  function renderPaymentMethod() {
    switch (paymentMethod) {
      case 'pix':
        return (
          <GenericPaymentMethod
            logoPath={require('../../assets/images/pix-logo.png')}
            name={'Pix'}
            onPress={handlePaymentPress}
          />
        );
      case 'creditCard':
        return (
          <GenericPaymentMethod
            logoPath={creditCard!.brand.logo}
            name={hideCardNumber(creditCard!.cardNumber)}
            onPress={handlePaymentPress}
          />
        );
      case 'boleto':
        return (
          <GenericPaymentMethod
            logoPath={require('../../assets/images/bank.png')}
            name={t('paymentMethod.bankSlip')}
            onPress={handlePaymentPress}
          />
        );
      default:
        return <EmptyPaymentMethod handlePress={handlePaymentPress} />;
    }
  }
  return <View>{renderPaymentMethod()}</View>;
}

function EmptyPaymentMethod({ handlePress }: { handlePress: () => void }) {
  const { t } = useTranslation();
  return (
    <Pressable style={styles.paymentMethod} onPress={handlePress}>
      <Text style={styles.paymentMethodTitle}>{t('paymentMethod.paymentMethod')}</Text>
      <View style={styles.addPaymentContainer}>
        <Text style={styles.changeMethods}>{t('paymentMethod.change')}</Text>
        <Text style={styles.paymentMethods}>{t('paymentMethod.noneAdded')}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  paymentMethod: {
    marginTop: 20,
  },
  paymentMethodTitle: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addPaymentContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    elevation: 3,
    marginTop: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  changeMethods: {
    color: Colors.red_500,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'right',
  },
  paymentMethods: {
    color: Colors.gray_500,
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 15,
  },
});
