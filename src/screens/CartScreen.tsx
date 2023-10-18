import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import CartItemCard from '../components/Cart/CartItemCard';
import { FormButton } from '../components/UI/FormButton';
import { UserContext } from '../store/UserContext';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../util/formatter';

function CartScreen(): JSX.Element {
  const userContext = useContext(UserContext);
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<any>();

  const cartTotalValue = () => {
    const total = userContext.cart
      .map((item) => Number(item.item.price) * item.quantity)
      .reduce((price, x) => price + x);
    return total;
  };

  const totalItens = () => {
    let itensCount = 0;
    userContext.cart.forEach((item) => (itensCount += item.quantity));
    return itensCount;
  };
  if (userContext.cart.length == 0) {
    return (
      <View>
        <View style={style.headerContainer}>
          <Text style={style.header}>{t('cartScreen.cart')}</Text>
        </View>
        <View style={style.emptyCart}>
          <Image source={require('../../src/assets/images/empty-cart.png')} />
          <Text style={style.emptyCartText}>
            {t('cartScreen.emptyMessage')}
          </Text>
        </View>
        <View style={style.totalAmountContainer}>
          <Text style={style.totalAmount}>{t('cartScreen.totalAmount')}</Text>
          <Text style={style.price}>{formatCurrency(0, i18n.language)}</Text>
        </View>
        <View style={style.button}>
          <FormButton
            title={t('cartScreen.buy')}
            disabled={true}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }

  return (
    <View>
      <View style={style.headerContainer}>
        <Text style={style.header}>{t('cartScreen.cart')}</Text>
      </View>
      <FlatList
        style={style.listContainer}
        contentContainerStyle={style.itemsList}
        data={userContext.cart}
        renderItem={({ item }) => (
          <CartItemCard
            data={item.item}
            removeProductFromCart={userContext.removeCartItem}
            quantity={item.quantity}
          />
        )}
      />
      <View style={style.totalAmountContainer}>
        <Text style={style.totalAmount}>{t('cartScreen.cart')}</Text>
        <Text style={style.price}>{formatCurrency(cartTotalValue(), i18n.language)}</Text>
      </View>
      <View style={style.button}>
        <FormButton title={t('cartScreen.buy')} disabled={totalItens() === 0} onPress={()=> {navigation.navigate("CheckoutStack")}} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    fontSize: 34,
    fontWeight: '700',
    color: 'black',
    marginLeft: 16,
    marginTop: 70,
  },

  listContainer: {
    alignSelf: "center",
    height: "65%",
  },

  itemsList: {
    alignItems: 'center',
  },

  headerContainer: {
    borderWidth: 0,
  },

  button: {
    width: '95%',
    alignSelf: 'center',
    paddingVertical: 15,
  },

  totalAmountContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  price: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 15,
    color: 'black',
  },

  totalAmount: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
    paddingHorizontal: 15,
  },

  emptyCart: {
    height: "65%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyCartText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
    color: 'black',
  },
});

export default CartScreen;
