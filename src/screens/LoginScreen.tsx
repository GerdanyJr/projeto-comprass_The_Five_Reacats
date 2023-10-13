import React, { useContext, useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../util/validationSchemas';
import { UserContext } from '../store/UserContext';

export interface Inputs {
  email: string;
  password: string;
}

export function LoginScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation<any>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  useEffect(() => {
    setErrorMessage(() => getLoginFormErrorMessage(errors));
  }, [errors.email, errors.password]);
  const userCtx = useContext(UserContext);

  function handleIconPress() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  async function handleLoginPress(data: Inputs) {
    setIsLoading(true);
    try {
      const token = await login(data.email, data.password);
      const user = await getUser(token.acessToken);
      userCtx.authenticate(token, user);
      navigation.navigate('MainPage');
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
          onPress={() => navigation.navigate('SignUp')}
        />
        <RedirectText
          title="I forgot my password"
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <RedirectText
          title="I don't want to login"
          onPress={() => navigation.navigate('MainPage')}
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
