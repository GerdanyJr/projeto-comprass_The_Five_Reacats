import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

export function FormError({ message }: { message: string }) {
  return <Text style={styles.error}>{message}</Text>;
}

const styles = StyleSheet.create({
  error: {
    fontFamily: 'Open Sans',
    color: Colors.red_200,
    fontWeight: '400',
    fontSize: 16,
  },
});
