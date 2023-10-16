import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import { useState } from 'react';

import { Colors } from '../../assets/constants/Colors';

export function CardItemExemple({
  onPress,
}: {
  onPress: (event: GestureResponderEvent) => void;
}) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Pressable
          onPress={() => {
            count !== 0 ? setCount(count - 1) : setCount(count);
          }}
          style={({ pressed }) =>
            pressed
              ? [styles.button, styles.pressed, styles.leftCorner]
              : [styles.button, styles.leftCorner]
          }
          accessibilityHint="minusButton"
        >
          <Image
            source={require('../../assets/images/minus-icon.png')}
            style={styles.minus}
          />
        </Pressable>
        <Text style={styles.count}>{count}</Text>
        <Pressable
          onPress={() => {
            setCount(count + 1);
          }}
          style={({ pressed }) =>
            pressed
              ? [styles.button, styles.pressed, styles.rightCorner]
              : [styles.button, styles.rightCorner]
          }
          accessibilityHint="plusButton"
        >
          <Image
            source={require('../../assets/images/plus-icon.png')}
            style={styles.plus}
          />
        </Pressable>
      </View>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.productContainer, styles.pressed]
            : styles.productContainer
        }
        accessibilityHint="productRedirection"
        onPress={onPress}
      >
        <Image
          source={require('../../assets/images/product-example.png')}
          style={styles.productImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.productName}>name</Text>
          <Text style={styles.productDescription} numberOfLines={2}>
            Crafted from the softest, breathable fabric
          </Text>
          <Text style={styles.productPrice}>30,00 R$</Text>
        </View>
      </Pressable>
    </View>
  );
}

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
    marginTop: 8,
    color: Colors.gray_500,
    fontSize: 14,
    fontWeight: '700',
  },
  productDescription: {
    marginTop: 4,
    color: '#000',
    fontSize: 10,
    fontWeight: '400',
  },
  productPrice: {
    marginTop: 6,
    color: Colors.red_500,
    fontSize: 16,
    fontWeight: '800',
  },
});
