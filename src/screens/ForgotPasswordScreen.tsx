import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { CompassBackground } from '../components/Login/CompassBackground';
import { forgotPasswordSchema } from '../util/validationSchemas';
import {
  getErrorMessageByCode,
  getSignUpFormErrorMessage,
} from '../util/errors';
import { GoBackButton } from '../components/UI/GoBackButton';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ForgotPasswordForm } from '../components/ForgotPassword/ForgotPasswordForm';
import { checkEmail, updateUserPassword } from '../service/auth';
import { useTranslation } from 'react-i18next';

export interface ForgotPasswordInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export function ForgotPasswordScreen() {
  const {
    control,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordInputs>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(forgotPasswordSchema),
    mode: 'onChange',
  });
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailFound, setIsEmailFound] = useState(false);

  useEffect(() => {
    setErrorMessage(() => getSignUpFormErrorMessage(errors));
  }, [errors.email, errors.password, errors.confirmPassword]);

  function handleIconPress(
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    setter((prevState) => !prevState);
  }

  async function handleConfirmPress(data: ForgotPasswordInputs) {
    setIsLoading(true);
    try {
      // hardcode id, pois nao tem como pegar id pelo email :(
      const response = await updateUserPassword(4, data.password);
      navigation.navigate('Login');
    } catch (error: any) {
      setErrorMessage(() => getErrorMessageByCode(error.response.status));
    } finally {
      setIsLoading(false);
    }
  }
  async function handleSearchPress(email: string) {
    setIsLoading(true);
    try {
      setErrorMessage('');
      const response = await checkEmail(email);
      if (!response.isAvailable) {
        setIsEmailFound(true);
      } else {
        setError('email', { type: 'custom', message: 'Email não encontrado' });
      }
    } catch (error: any) {
      setErrorMessage(() => getErrorMessageByCode(error.response.status));
    }
    setIsLoading(false);
  }
  return (
    <CompassBackground>
      <View style={styles.formContainer}>
        <GoBackButton
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <ForgotPasswordForm
          control={control}
          isPasswordVisible={isPasswordVisible}
          isConfirmPasswordVisible={isConfirmVisible}
          errors={errors}
          isValid={isValid}
          isEmailFound={isEmailFound}
          invalidEmail={
            getValues('email').length == 0 || !!errors.email?.message
          }
          emailValue={getValues('email')}
          handleSubmit={handleSubmit}
          handleConfirmPress={handleConfirmPress}
          handleSearchPress={handleSearchPress}
          handlePasswordIconPress={() => handleIconPress(setIsPasswordVisible)}
          handleConfirmPasswordIconPress={() =>
            handleIconPress(setIsConfirmVisible)
          }
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      </View>
    </CompassBackground>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 32,
  },
});
