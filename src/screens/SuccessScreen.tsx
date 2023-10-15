import React, {useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SuccessBackground from '../components/Success/SuccessBackground';
import SuccessText from '../components/Success/SuccessText';
import ContinueButton from '../components/Success/ContinueButton';
import { Colors } from '../assets/constants/Colors';
import { useNavigation } from '@react-navigation/native';


const SuccessScreen: React.FC = () => {

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
      <SuccessBackground>
        <SuccessText />
        <Text style={styles.thankYouText}>Your order will be delivered soon.{'\n'}
          Thank you for choosing our app!
        </Text>
        <ContinueButton
        onPress={handleContinuePress}
        children= 'Continue'
        />
      </SuccessBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouText: {
    color: Colors.black_800,
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: 16,

  }
});

export default SuccessScreen;