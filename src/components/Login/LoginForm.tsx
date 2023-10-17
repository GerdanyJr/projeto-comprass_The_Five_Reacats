import '../../lib/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Control, Controller, UseFormHandleSubmit } from 'react-hook-form';
import { InputField } from './InputField';
import { FormButton } from '../UI/FormButton';
import { FormError } from './FormError';
import { Inputs } from '../../screens/LoginScreen';

interface LoginFormProps {
  control: Control<Inputs, any>;
  handleSubmit: UseFormHandleSubmit<Inputs, undefined>;
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
  const { t } = useTranslation();
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputs}>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <InputField
              label={t('loginPage.email')}
              error={fieldState.invalid}
              enabledInput={true}
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <InputField
              label={t('loginPage.password')}
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
        title={t('loginPage.login')}
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
