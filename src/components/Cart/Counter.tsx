import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Image, View, Pressable, Text, StyleSheet } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

interface CounterProps {
  count: number;
  onPressMinus: () => void;
  onPressPlus: () => void;
}

const Counter = ({ count, onPressMinus, onPressPlus}: CounterProps) => {

  return (
    <View style={style.container}>
      <Pressable
        android_ripple={{ color: '#fff' }}
        style={style.button}
        onPress={onPressMinus}
        accessibilityHint='minusButton'
      >
        <Image
          source={require('../../assets/images/minus-icon.png')}
          style={{ width: 12, height: 3 }}
        />
      </Pressable>
      <Text style={style.count}>{count}</Text>
      <Pressable
        android_ripple={{ color: '#fff' }}
        style={style.button}
        onPress={onPressPlus}
        accessibilityHint='plusButton'
      >
        <Image
          source={require('../../assets/images/plus-icon.png')}
          style={style.plusIcon}
        />
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },

  count: {
    paddingHorizontal: 12,
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
  },

  button: {
    width: 36,
    height: 36,
    backgroundColor: Colors.red_500,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  minusIcon: {
    width: 12,
    height: 3,
  },

  plusIcon: {
    width: 13,
    height: 12,
  },
});

export default Counter;
