import React, { useState} from 'react';
import { Image, View, Pressable, Text, StyleSheet } from 'react-native';
import Counter from './Counter';

interface CartItemCardProps {
  name: string,
  price: string,
  url: string,
  id: string,
  removeProductFromCart: (itemId: string) => void
  quantity: number
}


const CartItemCard = ({name, price, url, id, removeProductFromCart, quantity} : CartItemCardProps) => {
  const [count, setCount] = useState<number>(quantity);

  const onPressDelete = () => {
    removeProductFromCart(id);
  }

  const onPressMinus = () => {
    count !== 0 ? setCount(count - 1) : setCount(count);
    
  }

  const onPressPlus = () => {
    setCount(count + 1);
  }


  const totalValue = count * Number(price);
  
  return (
    <View style={style.container}>
      <View>
        <Image
          source={{uri: url}}
          style={style.img}
        />
      </View>
      <View>
        <View style={style.infoContainer}>
          <Text style={style.productName}>{name}</Text>
          <Pressable android_ripple={{color: '#fff'}} style={{position: 'absolute', left: 225}} onPress={onPressDelete}>
            <Image source={require('../../assets/images/remove-from-cart-icon.png')} />
          </Pressable>
        </View>
        <View style={[style.infoContainer, {alignItems: 'center'}]}>
          <Counter count={count} onPressMinus={onPressMinus} onPressPlus={onPressPlus}/>
          <Text style={style.price}>{totalValue} R$</Text>
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
    alignSelf: 'center'
  },

  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 5
  },

  img: {
    width: 119,
    height: 104,
    borderRadius: 8
  },

  price: {
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
    paddingRight: 16,
    paddingLeft: 100
  }
});

export default CartItemCard;
