import React, { useEffect, useState } from 'react';
import { CompassBackground } from '../components/Login/CompassBackground';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ForgotPasswordForm } from '../components/ForgotPassword/ForgotPasswordForm';
import { useForm } from 'react-hook-form';
import { Colors } from '../assets/constants/Colors';
import {
  getErrorMessageByCode,
  getForgotPasswordInputsErrorMessage,
} from '../util/errors';
import { checkEmail } from '../service/auth';

export interface ForgotPasswordInputs {
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordEmailInput {
  email: string;
}

export interface EmailInput {
  email: string;
}

export const ForgotPasswordScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordInputEnabled, setisPasswordInputEnabled] = useState(false);
  const [isConfirmInputEnabled, setisConfirmInputEnabled] = useState(false);
  const [isConfirmButtonDisabled, setisConfirmButtonDisabled] = useState(true);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordInputs>({
    mode: 'onChange',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    setErrorMessage(() => getForgotPasswordInputsErrorMessage(errors));
  }, [errors.password, errors.confirmPassword]);

  const handleConfirmPress = (data: ForgotPasswordInputs) => {};

  const handleSearchPress = async (data: ForgotPasswordEmailInput) => {
    setIsLoading(true);
    try {
      const response = await checkEmail(data.email);
      console.log(response.isAvailable);
      if (!response.isAvailable) {
        setIsLoading(false);
        setisPasswordInputEnabled(true);
        setisConfirmInputEnabled(true);
      }
    } catch (error: any) {
      setErrorMessage(() => getErrorMessageByCode(error.response.status));
    } finally {
      setIsLoading(false);
    }
  };

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
        pwcontrol={control}
        pwhandleSubmit={handleSubmit}
        handleConfirmPress={handleConfirmPress}
        handleSearchPress={handleSearchPress}
        handleIconPress={handleIconPress}
        isLoading={isLoading}
        isPasswordVisible={isPasswordVisible}
        pwerrorMessage={errorMessage}
        isConfirmInputEnabled={isConfirmInputEnabled}
        isPasswordInputEnabled={isPasswordInputEnabled}
        isConfirmButtonDisabled={isConfirmButtonDisabled}
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
    marginTop: 26,
  },
  instructions: {
    width: 312,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.white,
    marginLeft: 20,
  },
});
