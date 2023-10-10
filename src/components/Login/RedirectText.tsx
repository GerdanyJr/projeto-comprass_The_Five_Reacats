import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

interface RedirectTextProps {
  title: string;
  onPress: () => void;
}

export function RedirectText({ title, onPress }: RedirectTextProps) {
  return (
    <Text style={styles.redirectText} onPress={onPress}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  redirectText: {
    width: '50%',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    color: Colors.white,
    fontWeight: '600',
  },
});
