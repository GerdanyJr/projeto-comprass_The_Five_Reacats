import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { memo } from 'react';
import { Colors } from '../../assets/constants/Colors';
import { CartItemCounter } from './CartItemCounter';
import { Product } from '../../types/interfaces/Product';

export const CardItem = memo(
  ({
    item,
    quantity,
    onPress,
    onPlusPress,
    onMinusPress,
  }: {
    item: Product;
    quantity: number | undefined;
    onPress: (item: Product) => void;
    onPlusPress: (id: string) => void;
    onMinusPress: (id: string) => void;
  }) => {
    return (
      <View style={styles.container}>
        <CartItemCounter
          quantity={quantity}
          handlePlusPress={() => onPlusPress(item.id)}
          handleMinusPress={() => onMinusPress(item.id)}
        />
        <Pressable
          style={({ pressed }) => [
            styles.productContainer,
            pressed && styles.pressed,
          ]}
          accessibilityHint="productRedirection"
          onPress={() => onPress(item)}
        >
          <Image
            source={{
              uri: item.images[0] || 'https://dummyjson.com/image/150',
            }}
            style={styles.productImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productDescription} numberOfLines={2}>
              {item.description}
            </Text>
            <Text style={styles.productPrice}>{item.price} R$</Text>
          </View>
        </Pressable>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: 148,
    marginLeft: 16,
    alignContent: 'center',
  },
  countContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: Colors.red_500,
    width: 50,
    height: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
  leftCorner: {
    borderTopLeftRadius: 12,
  },
  rightCorner: {
    borderTopRightRadius: 12,
  },
  minus: {
    width: 14,
    height: 3,
    borderRadius: 13,
  },
  count: {
    height: 21,
    width: 46,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Open Sans',
    backgroundColor: '#fff',
    borderColor: Colors.gray_500,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  plus: {
    width: 14,
    height: 13,
  },
  productContainer: {
    alignItems: 'center',
  },
  productImage: {
    width: 146,
    height: 184,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  textContainer: {
    width: 148,
    textAlign: 'left',
  },
  productName: {
    fontFamily: 'Open Sans',
    marginTop: 8,
    color: Colors.gray_500,
    fontSize: 14,
    fontWeight: '700',
  },
  productDescription: {
    fontFamily: 'Open Sans',
    marginTop: 4,
    color: '#000',
    fontSize: 10,
    fontWeight: '400',
  },
  productPrice: {
    fontFamily: 'Open Sans',
    marginTop: 6,
    color: Colors.red_500,
    fontSize: 16,
    fontWeight: '800',
  },
});