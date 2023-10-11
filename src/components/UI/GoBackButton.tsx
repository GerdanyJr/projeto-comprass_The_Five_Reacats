import React from 'react';
import { Image, Pressable } from 'react-native';

interface GoBackButtonProps {
  onPress: () => void;
}

export function GoBackButton({ onPress }: GoBackButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Image source={require('../../assets/images/go-back.png')} />
    </Pressable>
  );
}