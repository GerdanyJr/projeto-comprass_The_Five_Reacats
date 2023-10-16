import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

interface ContinueShoppingButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  children?: React.ReactNode;
}

const ContinueShoppingButton: React.FC<ContinueShoppingButtonProps> = ({ onPress, children, ...props }) => {
  return (
    <TouchableOpacity style={styles.continueButton} onPress={onPress} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continueButton: {
    width: 343,
    height: 48,
    backgroundColor: Colors.red_500,
    borderRadius: 25,
    elevation: 5,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    
    
  },
  buttonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default ContinueShoppingButton;