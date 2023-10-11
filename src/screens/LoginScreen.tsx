import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { CompassBackground } from '../components/Login/CompassBackground';
import { RedirectText } from '../components/Login/RedirectText';
import { useForm } from 'react-hook-form';
import { getUser, login } from '../service/auth';
import {
  getErrorMessageByCode,
  getLoginFormErrorMessage,
} from '../util/errors';
import { LoginForm } from '../components/Login/LoginForm';

export interface Inputs {
  email: string;
  password: string;
}

export function LoginScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  useEffect(() => {
    setErrorMessage(() => getLoginFormErrorMessage(errors));
  }, [errors.email, errors.password]);

  function handleIconPress() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  async function handleLoginPress(data: Inputs) {
    setIsLoading(true);
    try {
      const response = await login(data.email, data.password);
      const user = await getUser(response.access_token);
    } catch (error: any) {
      setErrorMessage(() => getErrorMessageByCode(error.response.status));
    } finally {
      reset({ email: '', password: '' });
      setIsLoading(false);
    }
  }

  return (
    <CompassBackground>
      <Image
        source={require('../assets/images/comprass-logo.png')}
        style={styles.comprassLogo}
      />
      <LoginForm
        control={control}
        handleSubmit={handleSubmit}
        handleLoginPress={handleLoginPress}
        isPasswordVisible={isPasswordVisible}
        handleIconPress={handleIconPress}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
      <View style={styles.redirectTextContainer}>
        <RedirectText
          title="Not have an account yet? Sign up"
          onPress={() => console.log('pressed text')}
        />
        <RedirectText
          title="I forgot my password"
          onPress={() => console.log('pressed text')}
        />
        <RedirectText
          title="I don't want to login"
          onPress={() => console.log('pressed text')}
        />
      </View>
    </CompassBackground>
  );
}

const styles = StyleSheet.create({
  comprassLogo: {
    alignSelf: 'center',
    marginTop: 56,
  },
  redirectTextContainer: {
    marginTop: 32,
    gap: 24,
  },
});
