import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Control, Controller, UseFormHandleSubmit } from 'react-hook-form';
import { InputField } from './InputField';
import { FormButton } from '../UI/FormButton';
import { FormError } from './FormError';
import { Inputs } from '../../screens/LoginScreen';

interface LoginFormProps {
  control: Control<Inputs, any>;
  handleSubmit:  UseFormHandleSubmit<Inputs, undefined>; 
  handleLoginPress: (data: Inputs) => void;
  isPasswordVisible: boolean;
  handleIconPress: () => void;
  errorMessage: string;
  isLoading: boolean;
}

export function LoginForm({
  control,
  handleSubmit,
  handleLoginPress,
  isPasswordVisible,
  handleIconPress,
  errorMessage,
  isLoading,
}: LoginFormProps) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputs}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please insert a valid email',
            },
          }}
          name="email"
          render={({ field, fieldState }) => (
            <InputField
              label="Email"
              error={fieldState.invalid}
              enabledInput={true}
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Please complete all fields',
            },
            minLength: {
              value: 6,
              message: 'Your password must be longer than 6 digits.',
            },
          }}
          name="password"
          render={({ field, fieldState }) => (
            <InputField
              label="Senha"
              icon={
                isPasswordVisible
                  ? require('../../assets/images/opened-eye.png')
                  : require('../../assets/images/closed-eye.png')
              }
              secureTextEntry={!isPasswordVisible}
              onIconPress={handleIconPress}
              error={fieldState.invalid}
              value={field.value}
              enabledInput={true}
              onChangeText={field.onChange}
            />
          )}
        />
        <FormError message={errorMessage} />
      </View>
      <FormButton
        title="Login"
        onPress={handleSubmit(handleLoginPress)}
        isLoading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 32,
    gap: 48,
  },
  inputs: {
    marginTop: 32,
    gap: 16,
  },
});