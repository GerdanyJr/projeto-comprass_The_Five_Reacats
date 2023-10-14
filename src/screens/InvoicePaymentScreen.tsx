import React, {useEffect} from "react";
import { View, StyleSheet, Text} from 'react-native';
import ContinueShoppingButton from "../components/Success/ContinueShoppingButton";
import BagsBackgroundImage from "../components/Success/BagsBackgroundImage";
import SuccessText from "../components/Success/SuccessText";
import DownloadInvoiceButton from "../components/Success/DownloadInvoiceButton";
import InvoicePaymentText from "../components/Success/InvoicePaymentText";
import { Colors } from "../assets/constants/Colors"; 
import { useNavigation } from "@react-navigation/native";

const InvoicePaymentScreen: React.FC = () => {

    const navigation = useNavigation();
  
    useEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
  
    })
    
    const handleContinuePress = () => {
      
    };
  
    return (
      <View style={styles.container}>
        <BagsBackgroundImage source={require('../assets/images/bags.png')}>
        </BagsBackgroundImage>
        <View style={styles.SuccessText}>
            <SuccessText  />
            <InvoicePaymentText
            style={styles.instructionText}
            daysOffset={1}
            />
        </View>
        <DownloadInvoiceButton 
        downloadUrl="https://drive.google.com/uc?id=1NMJFDL7lBE86OWwvRBB8GC_JOWrd-F2l&export=download"
        
        children= 'BAIXAR BOLETO'
        />
          <ContinueShoppingButton
          onPress={handleContinuePress}
          children= 'CONTINUE SHOPPING'
          />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,

    },
    instructionText: {
      color: Colors.black_800,
      lineHeight: 24,
      fontSize: 16,
      fontWeight: '400',
      textAlign: 'center',
      paddingBottom: 16,
  
    },
    SuccessText: {
        marginTop: 16,
        marginBottom: 310,
    }
  });

  export default InvoicePaymentScreen;
  