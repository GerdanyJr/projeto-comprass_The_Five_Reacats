import React, {useEffect} from "react";
import { View, StyleSheet, Text} from 'react-native';
import ContinueShoppingButton from "../components/Success/ContinueShoppingButton";
import BagsBackgroundImage from "../components/Success/BagsBackgroundImage";
import SuccessText from "../components/Success/SuccessText";
import { Colors } from "../assets/constants/Colors"; 
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';

const CardPaymentSuccessScreen: React.FC = () => {

    const { t } = useTranslation();
    const navigation = useNavigation();
  
    useEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
  
    })
  
    return (
      <View style={styles.container}>
        <BagsBackgroundImage>
        </BagsBackgroundImage>
        <View style={styles.SuccessText}>
            <SuccessText  />
            <Text style={styles.thankYouText}> {t('successScreen.thankYouText')}
            </Text>
        </View>
          <ContinueShoppingButton
          children= {t('successScreen.continueShopping')}
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

  export default CardPaymentSuccessScreen;
  