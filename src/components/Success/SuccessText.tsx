import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { useTranslation } from 'react-i18next';

const SuccessText: React.FC = () => {
  const { t } = useTranslation();
  return <Text 
  style={styles.successText}
  accessibilityHint='success text'
  >{t('successScreen.successText')}</Text>;
};

const styles = StyleSheet.create({
  successText: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black_800,
    textAlign: 'center',
    paddingBottom: 12,
    
  },
});

export default SuccessText;