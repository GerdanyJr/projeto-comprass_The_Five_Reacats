import React from 'react';
import { CompassBackground } from '../components/Login/CompassBackground';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { Colors } from '../assets/constants/Colors';

export function SplashScreen() {
  return (
    <CompassBackground>
      <View style={styles.container}>
        <Image source={require('../assets/images/comprass-logo.png')} />
        <ActivityIndicator
          size={80}
          color={Colors.red_500}
          style={styles.image}
        />
      </View>
    </CompassBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    paddingTop: 16,
  },
});
