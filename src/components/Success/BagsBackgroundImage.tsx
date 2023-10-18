import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';


const BagsBackgroundImage = ({children, ...props } : {children:React.ReactNode}) => {
  return (
    
    <ImageBackground 
    source={require('../../assets/images/bags.png')} 
    style={styles.backgroundImage} 
    accessibilityHint='bags background'
    {...props}
    >
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

export default BagsBackgroundImage;
