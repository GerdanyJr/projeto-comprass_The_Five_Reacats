import React from 'react';
import { Image, Pressable } from 'react-native';

interface GoBackButtonProps {
  black?: boolean;
  onPress: () => void;
}

export function GoBackButton({ black, onPress }: GoBackButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={
          black
            ? require('../../assets/images/go-back-black.png')
            : require('../../assets/images/go-back.png')
        }
      />
    </Pressable>
  );
}
