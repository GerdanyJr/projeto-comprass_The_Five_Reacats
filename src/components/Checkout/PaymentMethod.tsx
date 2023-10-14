import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

export function PaymenMethod() {
  return (
    <View style={styles.paymentMethod}>
      <Text style={styles.paymentMethodTitle}>Payment Method</Text>
      <View style={styles.addPaymentContainer}>
        <Text style={styles.changeMethods}>Change</Text>
        <Text style={styles.paymentMethods}>None added</Text>
      </View>
    </View>
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
