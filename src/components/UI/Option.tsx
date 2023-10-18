import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

export function Option({
  title,
  selected,
  onPress,
}: {
  title: string;
  onPress: () => void;
  selected?: boolean;
}) {
  return (
    <Pressable
      android_ripple={{ color: Colors.gray_500, foreground: true }}
      onPress={onPress}
    >
      <Text style={[styles.optionTitle, selected && styles.selectedOption]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 24,
  },
  optionTitle: {
    fontFamily: 'Open Sans',
    color: Colors.black,
    fontWeight: '600',
    fontSize: 20,
    paddingLeft: 16,
    paddingVertical: 13,
  },
  selectedOption: {
    fontFamily: 'Open Sans',
    color: Colors.white,
    backgroundColor: Colors.red_500,
  },
});
