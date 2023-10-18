import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, Linking } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

interface DownloadInvoiceButtonProps extends TouchableOpacityProps {
  downloadUrl: string;
  children?: React.ReactNode;
}

const DownloadInvoiceButton: React.FC<DownloadInvoiceButtonProps> = ({ downloadUrl, children, ...props }) => {
  const handleDownloadPress = async () => {
    try {
      const supported = await Linking.canOpenURL(downloadUrl);

      if (supported) {
        await Linking.openURL(downloadUrl);
      } else {
        console.error(`Não é possível abrir a URL: ${downloadUrl}`);
      }
    } catch (error) {
      console.error('Erro ao abrir a URL:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.continueButton} onPress={handleDownloadPress} {...props}>
      <Text style={styles.buttonText}>{children || 'Download'}</Text>
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
    alignItems: 'center',
    position: 'absolute',
    bottom: 114,
  },
  buttonText: {
    fontFamily: 'Open Sans',
    color: Colors.white,
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default DownloadInvoiceButton;