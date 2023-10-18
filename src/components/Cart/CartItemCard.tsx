import React, { useContext, useEffect, useState } from 'react';
import { Image, View, Pressable, Text, StyleSheet } from 'react-native';
import { UserContext } from '../../store/UserContext';
import Counter from './Counter';
import { Product } from '../../types/interfaces/Product';

interface CartItemCardProps {
  data: Product;
  removeProductFromCart: (itemId: string) => void;
  quantity: number;
}

const CartItemCard = ({
  data,
  removeProductFromCart,
  quantity,
}: CartItemCardProps) => {
  const [count, setCount] = useState<number>(quantity);
  const userCtx = useContext(UserContext);
  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  const onPressDelete = () => {
    removeProductFromCart(data.id);
  };

  const onPressMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
      userCtx.setItem(data, count - 1);
    } else {
      setCount(count);
    }
  };

  const onPressPlus = () => {
    setCount(count + 1);
    userCtx.setItem(data, count + 1);
  };

  const totalValue = count * Number(data.price);

  return (
    <View style={style.container}>
      <View>
        <Image source={{ uri: data.images[0] }} style={style.img} />
      </View>
      <View>
        <View style={style.infoContainer}>
          <Text style={style.productName}>{data.title}</Text>
          <Pressable android_ripple={{ color: '#fff' }} onPress={onPressDelete}>
            <Image
              source={require('../../assets/images/remove-from-cart-icon.png')}
            />
          </Pressable>
        </View>
        <View style={[style.infoContainer, { alignItems: 'center' }]}>
          <Counter
            count={count}
            onPressMinus={onPressMinus}
            onPressPlus={onPressPlus}
          />
          <Text style={style.price}>{totalValue} R$</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 104,
    flexDirection: 'row',
    borderRadius: 8,
    gap: 12,
    width: 343,
    backgroundColor: '#fff',
    elevation: 8,
  },

  productName: {
    maxWidth: 150,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },

  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    width: 228,
  },
  counterContainer: {
    alignItems: 'center',
    width: '72%',
    flexDirection: 'row',
    paddingLeft: 5,
  },
  img: {
    width: 104,
    height: 104,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  price: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
    marginRight: 12,
  },
});

export default CartItemCard;
