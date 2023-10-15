import React from 'react';
import { ImageBackground, StyleSheet, ImageBackgroundProps } from 'react-native';

const SuccessBackground= ({children, ...props } : {children:React.ReactNode}) => {
  return (
    <ImageBackground 
    source={require('../../assets/images/success-girl-background.png')} 
    style={styles.backgroundImage} 
    accessibilityHint='success background'
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
    height: '100%',
    width: '100%',
    
  },
});

export default SuccessBackground;
