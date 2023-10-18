import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ContinueShoppingButton from '../components/Success/ContinueShoppingButton';
import PixBackgroundImage from '../components/Success/PixBackgroundImage';
import SuccessText from '../components/Success/SuccessText';
import { Colors } from '../assets/constants/Colors';
import { useTranslation } from 'react-i18next';

const PixPaymentSuccessScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <PixBackgroundImage>
      </PixBackgroundImage>
      <View style={styles.SuccessText}>
        <SuccessText />
        <Text style={styles.instructionText}>
          {t('successScreen.instructionText')}
        </Text>
      </View>
      <ContinueShoppingButton children={t('successScreen.continueShopping')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  instructionText: {
    color: Colors.black_800,
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: 16,
  },
  SuccessText: {
    marginTop: 16,
    marginBottom: 310,
  },
});

export default PixPaymentSuccessScreen;