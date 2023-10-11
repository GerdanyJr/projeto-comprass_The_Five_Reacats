import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { CompassBackground } from '../components/Login/CompassBackground';
import { signUp } from '../service/auth';
import { SignUpForm } from '../components/SignUp/SignUpForm';
import { signUpSchema } from '../util/validationSchemas';
import {
  getErrorMessageByCode,
  getSignUpFormErrorMessage,
} from '../util/errors';
import { GoBackButton } from '../components/UI/GoBackButton';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export interface SignUpInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUpScreen() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: yupResolver(signUpSchema),
    mode: 'onChange',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation<any>();

  useEffect(() => {
    setErrorMessage(() => getSignUpFormErrorMessage(errors));
  }, [errors.name, errors.email, errors.password, errors.confirmPassword]);

  function handleIconPress(
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    setter((prevState) => !prevState);
  }

  async function handleSignUpPress(data: SignUpInputs) {
    setIsLoading(true);
    try {
      await signUp(data.name, data.email, data.password);
      navigation.navigate('Login');
    } catch (error: any) {
      setErrorMessage(() => getErrorMessageByCode(error.response.status));
    } finally {
      reset({ email: '', password: '' });
      setIsLoading(false);
    }
  }

  return (
    <CompassBackground>
      <View style={styles.formContainer}>
        <GoBackButton onPress={() => navigation.navigate('Login')} />
        <SignUpForm
          control={control}
          handleSubmit={handleSubmit}
          handleSignUpPress={handleSignUpPress}
          isPasswordVisible={isPasswordVisible}
          isConfirmPasswordVisible={isConfirmVisible}
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
