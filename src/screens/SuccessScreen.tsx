import React, { useEffect, useContext, useLayoutEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SuccessBackground from '../components/Success/SuccessBackground';
import SuccessText from '../components/Success/SuccessText';
import ContinueButton from '../components/Success/ContinueButton';
import { Colors } from '../assets/constants/Colors';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { CheckoutContext } from '../store/CheckoutContext'
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';

const SuccessScreen: React.FC = () => {
  const { t } = useTranslation();
  const route = useRoute();
  const navigation = useNavigation<any>();
  const { paymentMethod } = useContext(CheckoutContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleContinuePress = () => {
    switch (paymentMethod) {
      case 'pix':
        navigation.navigate('SuccessStack', { screen: 'PixPaymentScreen' });
        break;
      case 'boleto':
        navigation.navigate('SuccessStack', { screen: 'InvoicePaymentScreen' });
        break;
      case 'creditCard':
        navigation.navigate('SuccessStack', { screen: 'CardPaymentSuccessScreen' });
        break;
      default:
        navigation.navigate('MainPage')
        break;
    }
  }

  return (
    <View style={styles.container}>
      <SuccessBackground>
        <SuccessText />
        <Text style={styles.thankYouText}>
          {t('successScreen.thankYouText')}
        </Text>
        <ContinueButton
          onPress={handleContinuePress}
          children='Continue'
        />
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
  }
});

export default SuccessScreen;
