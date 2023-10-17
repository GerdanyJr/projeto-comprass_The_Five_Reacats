import React, { useContext } from 'react';
import { Image, View, Pressable, Text, StyleSheet } from 'react-native';
import Counter from './Counter';
import { Product } from '../../types/interfaces/Product';
import { CartItem } from '../../types/interfaces/CartItem';
import { UserContext } from '../../store/UserContext';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../../util/formatter';

interface CartItemCardProps {
  cartItem: CartItem;
  removeProductFromCart: (itemId: string) => void;
}

const CartItemCard = ({
  cartItem,
  removeProductFromCart,
}: CartItemCardProps) => {
  const { quantity, item } = cartItem;
  const { id, title, price, images } = item;
  const { setItem } = useContext(UserContext);
  const { i18n } = useTranslation();

  const onPressDelete = () => {
    removeProductFromCart(id);
  };

  const totalValue = quantity * Number(price);

  function handleIncrement(item: Product) {
    setItem(item, quantity + 1);
  }
  function handleDecrement(item: Product) {
    quantity > 0 && setItem(item, quantity - 1);
  }

  return (
    <View style={style.container}>
      <View>
        <Image source={{ uri: images[0] }} style={style.img} />
      </View>
      <View>
        <View style={style.infoContainer}>
          <Text style={style.productName}>{title}</Text>
          <Pressable
            android_ripple={{ color: '#fff' }}
            style={{ position: 'absolute', left: 225 }}
            onPress={onPressDelete}
          >
            <Image
              source={require('../../assets/images/remove-from-cart-icon.png')}
            />
          </Pressable>
        </View>
        <View style={[style.infoContainer, style.counterContainer]}>
          <Counter
            count={quantity}
            onPressMinus={() => handleDecrement(item)}
            onPressPlus={() => handleIncrement(item)}
          />
          <Text style={style.price}>
            {formatCurrency(totalValue, i18n.language)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 380,
    height: 104,
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },

  productName: {
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },

  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  counterContainer: {
    alignItems: 'center',
    width: '72%',
    flexDirection: 'row',
    paddingLeft: 5,
  },
  img: {
    width: 119,
    height: 104,
    borderRadius: 8,
  },

  price: {
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
    paddingRight: 16,
    textAlign: 'right'
  },
});

export default CartItemCard;
