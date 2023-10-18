import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export function NotchHeader({ title }: { title: string }) {
  return (
    <View>
      <Image
        source={require('../../assets/images/notch.png')}
        style={styles.notch}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notch: {
    alignSelf: 'center',
    marginTop: 16,
  },
  title: {
    fontFamily: 'Open Sans',
    marginTop: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
});
