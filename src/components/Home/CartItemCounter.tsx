import React from 'react';
import { View, Pressable, Image, Text, StyleSheet } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

export function CartItemCounter({
  quantity,
  handlePlusPress,
  handleMinusPress,
}: {
  quantity: number | undefined;
  handlePlusPress: () => void;
  handleMinusPress: () => void;
}) {
  return (
    <View style={styles.countContainer}>
      <Pressable
        onPress={handleMinusPress}
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
      <Text style={styles.count}>{quantity || 0}</Text>
      <Pressable
        onPress={handlePlusPress}
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
  );
}

const styles = StyleSheet.create({
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
    fontFamily: 'Open Sans',
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
});