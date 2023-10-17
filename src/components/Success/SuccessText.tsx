import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

const SuccessText: React.FC = () => {
  return <Text 
  style={styles.successText}
  accessibilityHint='success text'
  >Success!</Text>;
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