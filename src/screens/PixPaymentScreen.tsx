import React, {useEffect} from "react";
import { View, StyleSheet, Text} from 'react-native';
import ContinueShoppingButton from "../components/Success/ContinueShoppingButton";
import PixBackgroundImage from "../components/Success/PixBackgroundImage";
import SuccessText from "../components/Success/SuccessText";
import { Colors } from "../assets/constants/Colors"; 
import { useNavigation } from "@react-navigation/native";

const PixPaymentSuccessScreen: React.FC = () => {

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
        <PixBackgroundImage source={require('../assets/images/fake-pix-QR.png')}>
        </PixBackgroundImage>
        <View style={styles.SuccessText}>
            <SuccessText  />
            <Text style={styles.thankYouText}>Pay your pix using the QR code above and{'\n'}
                then follow the steps sent by email.
            </Text>
        </View>
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
    thankYouText: {
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

  export default PixPaymentSuccessScreen;
  