import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { CartItem } from '../../types/interfaces/CartItem';
import { useTranslation } from 'react-i18next';

export function Summary({ cart }: { cart: CartItem[] }) {
  const { t } = useTranslation();
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.summaryItem}>{t('summary.order')}:</Text>
        </View>
        <View>
          <Text style={styles.summaryPrice}>112,00 R$</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.summaryItem}>{t('summary.delivery')}:</Text>
        </View>
        <View>
          <Text style={styles.summaryPrice}>0 R$</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={[styles.summaryItem, { fontWeight: 'bold' }]}>
            {t('summary.summary')}:
          </Text>
        </View>
        <View>
          <Text style={styles.finalPrice}>112,00 R$</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
  },
  summaryItem: {
    fontSize: 20,
    color: Colors.gray_500,
  },
  summaryPrice: {
    fontSize: 18,
    color: Colors.black,
  },
  finalPrice: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
  },
});
