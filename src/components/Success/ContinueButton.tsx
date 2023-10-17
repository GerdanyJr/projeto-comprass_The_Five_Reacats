import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

interface ContinueButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  children?: React.ReactNode;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ onPress, children, ...props }) => {
  return (
    <TouchableOpacity style={styles.continueButton} onPress={onPress} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continueButton: {
    width: 160,
    height: 36,
    backgroundColor: Colors.red_500,
    borderRadius: 25,
    elevation: 5,
    justifyContent: 'center',
    marginBottom: 480,
    
    
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default ContinueButton;
