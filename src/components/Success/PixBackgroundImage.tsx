import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const PixBackgroundImage= ({children, ...props } : {children:React.ReactNode}) => {
  return (
    <ImageBackground 
    source={require('../../assets/images/fake-pix-QR.png')} 
    style={styles.backgroundImage} 
    accessibilityHint='pix background'
    {...props}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 213,
    width: 208,
    marginTop: 209,
    
  },
});

export default PixBackgroundImage;
