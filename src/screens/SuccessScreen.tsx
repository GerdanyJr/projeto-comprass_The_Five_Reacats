import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SuccessBackground from '../components/Success/SuccessBackground';
import SuccessText from '../components/Success/SuccessText';
import ContinueButton from '../components/Success/ContinueButton';
import { Colors } from '../assets/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { CheckoutContext } from '../store/CheckoutContext';
import { useTranslation } from 'react-i18next';

const SuccessScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const { paymentMethod } = useContext(CheckoutContext);

  const handleContinuePress = () => {
    switch (paymentMethod) {
      case 'pix':
        navigation.navigate('SuccessStack', { screen: 'PixPaymentScreen' });
        break;
      case 'boleto':
        navigation.navigate('SuccessStack', { screen: 'InvoicePaymentScreen' });
        break;
      case 'creditCard':
        navigation.navigate('SuccessStack', {
          screen: 'CardPaymentSuccessScreen',
        });
        break;
      default:
        navigation.navigate('MainPage');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <SuccessBackground>
        <SuccessText />
        <Text style={styles.thankYouText}>
          {t('successScreen.thankYouText')}
        </Text>
        <ContinueButton onPress={handleContinuePress} children={t('successScreen.continue')} />
      </SuccessBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouText: {
    color: Colors.black_800,
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: 16,
  },
});

export default SuccessScreen;
