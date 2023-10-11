import React, { useState } from 'react';
import { CompassBackground } from '../components/Login/CompassBackground';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ForgotPasswordForm } from '../components/ForgotPassword/ForgotPasswordForm';
import { useForm } from 'react-hook-form';
import { Colors } from '../assets/constants/Colors';

export interface ForgotPasswordInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export const ForgotPasswordScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordInputs>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleConfirmPress = () => {};

  const handleSearchPress = () => {};

  const handleIconPress = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <CompassBackground>
      <View>
        <Text style={style.headerText}>Forgot Password</Text>
        <Text style={style.instructions}>
          Enter your email and let us see if it exists for you to change your
          password :)
        </Text>
      </View>

      <ForgotPasswordForm
        control={control}
        handleSubmit={handleSubmit}
        handleConfirmPress={handleConfirmPress}
        handleSearchPress={handleSearchPress}
        handleIconPress={handleIconPress}
        isLoading={isLoading}
        isPasswordVisible={isPasswordVisible}
        errorMessage={errorMessage}
      />
    </CompassBackground>
  );
};

const style = StyleSheet.create({
  headerText: {
    color: Colors.white,
    fontSize: 32,
    marginLeft: 20,
    fontWeight: '800',
    marginTop: 26
  },
  instructions: {
    width: 312,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.white
  }, 
});
