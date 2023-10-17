import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import { memo } from 'react';
import { Colors } from '../../assets/constants/Colors';
import { Product } from '../../types/interfaces/Product';

export const Item = memo(
  ({
    data,
    onPress,
  }: {
    data:Product;
    onPress: (event: GestureResponderEvent) => void;
  }) => {

    return (
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.productContainer, styles.pressed]
              : styles.productContainer
          }
          accessibilityHint="productRedirection"
          onPress={onPress}
        >
          <Image source={{ uri: data.images[0] }} style={styles.productImage} />
          <View style={styles.textContainer}>
            <Text style={styles.productCategory}>
              {data.category.name}
            </Text>
            <Text style={styles.productName}>{data.title}</Text>
            <Text style={styles.productPrice}>{data.price} R$</Text>
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

  pressed: {
    opacity: 0.75,
  },

  productContainer: {
    alignItems: 'center',
  },

  productImage: {
    width: 146,
    height: 184,
    borderRadius: 12,
  },

  textContainer: {
    width: 148,
    textAlign: 'left',
  },

  productCategory: {
    marginTop: 8,
    color: Colors.gray_500,
    fontSize: 12,
    fontWeight: '400',
  },
  productName: {
    marginTop: 4,
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },

  productPrice: {
    marginTop: 6,
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
});
