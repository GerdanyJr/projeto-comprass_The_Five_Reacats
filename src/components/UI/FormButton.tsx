import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

interface FormButtonProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

export function FormButton({ title, disabled, onPress }: FormButtonProps) {
  return (
    <Pressable
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red_500,
    borderRadius: 25,
  },
  disabledButton: {
    backgroundColor: Colors.gray_900,
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
