import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import CartItemCard from '../components/Cart/CartItemCard';
import { FormButton } from '../components/UI/FormButton';
import { UserContext } from '../store/UserContext';
import { useNavigation } from '@react-navigation/native';

function CartScreen(): JSX.Element {
  const userContext = useContext(UserContext);
  const navigation = useNavigation<any>();

  const cartTotalValue = () => {
    let total = 0;
    userContext.cart.map(
      item => (total += Number(item.item.price) * item.quantity)
    );
    return total;
  };

  const totalItens = () => {
    let itensCount = 0;
    userContext.cart.forEach(item => (itensCount += item.quantity));
    return itensCount;
  }

  if (userContext.cart.length == 0) {
    return (
      <View>
        <View style={style.headerContainer}>
          <Text style={style.header}>Cart</Text>
        </View>
        <View style={style.emptyCart}>
          <Image source={require('../../src/assets/images/empty-cart.png')} />
          <Text style={style.emptyCartText}>
            Your cart is so empty and abandoned...
          </Text>
        </View>
        <View style={style.totalAmountContainer}>
          <Text style={style.totalAmount}>Total amount:</Text>
          <Text style={style.price}>0 R$</Text>
        </View>
        <View style={style.button}>
          <FormButton title="BUY" disabled={true} onPress={() => {}} />
        </View>
      </View>
    );
  }

  

  return (
    <View>
      <View style={style.headerContainer}>
        <Text style={style.header}>Cart</Text>
      </View>
      <FlatList
        style={{height: 520}}
        contentContainerStyle={style.itemsList}
        data={userContext.cart}
        renderItem={({ item }) => (
          <CartItemCard
            id={item.item.id}
            name={item.item.title}
            price={item.item.price}
            url={item.item.images[0]}
            removeProductFromCart={userContext.removeCartItem}
            quantity={item.quantity}
          />
        )}
      />
      <View style={style.totalAmountContainer}>
        <Text style={style.totalAmount}>Total amount:</Text>
        <Text style={style.price}>{0} R$</Text>
      </View>
      <View style={style.button}>
        <FormButton title="BUY" disabled={totalItens() === 0} onPress={navigation.navigate("CheckoutStack")} />
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

  itemsList: {
    alignItems: 'center'
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
    height: 520,
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
