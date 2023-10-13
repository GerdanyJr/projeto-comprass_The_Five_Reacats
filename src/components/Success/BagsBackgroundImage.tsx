import React from 'react';
import { ImageBackground, StyleSheet, ImageBackgroundProps } from 'react-native';

interface BagsBackgroundImageProps extends ImageBackgroundProps {
  children?: React.ReactNode;
}

const BagsBackgroundImage: React.FC<BagsBackgroundImageProps> = ({ source, children, ...props }) => {
  return (
    <ImageBackground source={source} style={styles.backgroundImage} {...props}>
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
