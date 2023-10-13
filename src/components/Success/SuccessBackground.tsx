import React from 'react';
import { ImageBackground, StyleSheet, ImageBackgroundProps } from 'react-native';

interface SuccessBackgroundImageProps extends ImageBackgroundProps {
  children?: React.ReactNode;
}

const SuccessBackground: React.FC<SuccessBackgroundImageProps> = ({ source, children, ...props }) => {
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
    height: '100%',
    width: '100%',
    
  },
});

export default SuccessBackground;
