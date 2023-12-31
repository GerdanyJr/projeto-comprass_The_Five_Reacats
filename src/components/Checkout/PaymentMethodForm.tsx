import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { NotchHeader } from './NotchHeader';
import { CheckoutContext } from '../../store/CheckoutContext';
import { useTranslation } from 'react-i18next';

function PaymentOption({
  title,
  selected,
  onPress,
}: {
  title: string;
  onPress: () => void;
  selected?: boolean;
}) {
  return (
    <Pressable
      android_ripple={{ color: Colors.gray_500, foreground: true }}
      onPress={onPress}
    >
      <Text style={[styles.optionTitle, selected && styles.selectedOption]}>
        {title}
      </Text>
    </Pressable>
  );
}

export function PaymentMethodForm() {
  const navigation = useNavigation<any>();
  const checkoutCtx = useContext(CheckoutContext);
  const { t } = useTranslation();

  function handlePress(payload: string) {
    switch (payload) {
      case 'creditCard':
        navigation.navigate('CardForm');
        break;
      case 'pix':
        checkoutCtx.addPaymentMethod('pix');
        navigation.goBack();
        break;
      case 'boleto':
        checkoutCtx.addPaymentMethod('boleto');
        navigation.goBack();
        break;
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      <NotchHeader title={t('paymentMethod.chooseMethod')} />
      <View style={styles.optionsContainer}>
        <PaymentOption
          title={t('paymentMethod.creditCard')}
          onPress={() => handlePress('creditCard')}
          selected={checkoutCtx.paymentMethod === 'creditCard'}
        />
        <PaymentOption
          title={t('paymentMethod.pix')}
          onPress={() => handlePress('pix')}
          selected={checkoutCtx.paymentMethod === 'pix'}
        />
        <PaymentOption
          title={t('paymentMethod.bankSlip')}
          onPress={() => handlePress('boleto')}
          selected={checkoutCtx.paymentMethod === 'boleto'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.33,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    backgroundColor: 'white',
  },
  optionsContainer: {
    marginTop: 24,
  },
  optionTitle: {
    fontFamily: 'Open Sans',
    color: Colors.black,
    fontWeight: '600',
    fontSize: 20,
    paddingLeft: 16,
    paddingVertical: 13,
  },
  selectedOption: {
    fontFamily: 'Open Sans',
    color: Colors.white,
    backgroundColor: Colors.red_500,
  },
});
