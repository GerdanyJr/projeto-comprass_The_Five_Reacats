import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

interface FormHeaderProps {
  title: string;
  description?: string;
  style?: any;
}

export function FormHeader({ title, description, style }: FormHeaderProps) {
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 40,
  },
  description: {
    color: Colors.white,
    fontSize: 20,
    marginTop: 16,
  },
});
