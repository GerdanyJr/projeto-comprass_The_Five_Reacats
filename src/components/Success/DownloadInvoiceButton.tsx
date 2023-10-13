import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

interface DownloadInvoiceButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  children?: React.ReactNode;
}

const DownloadInvoiceButton: React.FC<DownloadInvoiceButtonProps> = ({ onPress, children, ...props }) => {
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
    bottom: 114,
    
    
  },
  buttonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default DownloadInvoiceButton;
