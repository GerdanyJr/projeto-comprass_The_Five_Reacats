import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

export function CompassBackground({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../../assets/images/compass_logo.png')}
        imageStyle={styles.imgBackground}
      >
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  imgBackground: {
    width: '100%',
    height: 375,
    marginVertical: '50%',
  },
});
