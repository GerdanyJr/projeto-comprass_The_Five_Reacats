import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { CartItem } from '../../types/interfaces/CartItem';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../../util/formatter';
import i18n from '../../lib/i18n';

export function Summary({ cart }: { cart: CartItem[] }) {
  const { t } = useTranslation();
  const price = cart
    .map((x) => Number(x.item.price) * x.quantity)
    .reduce((price, x) => price + x);
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.summaryItem}>{t('summary.order')}:</Text>
        </View>
        <View>
          <Text style={styles.summaryPrice}>{formatCurrency(price, i18n.language)}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.summaryItem}>{t('summary.delivery')}:</Text>
        </View>
        <View>
          <Text style={styles.summaryPrice}>{formatCurrency(0, i18n.language)}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={[styles.summaryItem, { fontWeight: 'bold' }]}>
            {t('summary.summary')}:
          </Text>
        </View>
        <View>
          <Text style={styles.finalPrice}>{formatCurrency(price, i18n.language)}</Text>
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
    fontFamily: 'Open Sans',
    fontSize: 20,
    color: Colors.gray_500,
  },
  summaryPrice: {
    fontFamily: 'Open Sans',
    fontSize: 18,
    color: Colors.black,
  },
  finalPrice: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
  },
});
