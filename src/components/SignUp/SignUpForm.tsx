import '../../lib/i18n';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Control, Controller, UseFormHandleSubmit } from 'react-hook-form';
import { InputField } from '../Login/InputField';
import { FormButton } from '../UI/FormButton';
import { FormError } from '../Login/FormError';
import { SignUpInputs } from '../../screens/SignUpScreen';
import { FormHeader } from '../UI/FormHeader';
import { useTranslation } from 'react-i18next';

interface SignUpFormProps {
  control: Control<SignUpInputs, any>;
  handleSubmit: UseFormHandleSubmit<SignUpInputs, undefined>;
  handleSignUpPress: (data: SignUpInputs) => void;
  isPasswordVisible: boolean;
  isConfirmPasswordVisible: boolean;
  handlePasswordIconPress: () => void;
  handleConfirmPasswordIconPress: () => void;
  errorMessage: string;
  isLoading: boolean;
}

export function SignUpForm({
  control,
  handleSubmit,
  handleSignUpPress,
  isPasswordVisible,
  isConfirmPasswordVisible,
  handlePasswordIconPress,
  handleConfirmPasswordIconPress,
  errorMessage,
  isLoading,
}: SignUpFormProps) {
  const { t } = useTranslation();
  return (
    <>
      <FormHeader
        title={t('signUpPage.signUp')}
        description={t('signUpPage.headerDescription')}
        style={styles.formHeader}
      />
      <View style={styles.inputs}>
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <InputField
              label={t('signUpPage.name')}
              error={fieldState.invalid}
              enabledInput={true}
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <InputField
              label={t('signUpPage.email')}
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
              label={t('signUpPage.password')}
              icon={
                isPasswordVisible
                  ? require('../../assets/images/opened-eye.png')
                  : require('../../assets/images/closed-eye.png')
              }
              secureTextEntry={!isPasswordVisible}
              onIconPress={handlePasswordIconPress}
              error={fieldState.invalid}
              value={field.value}
              enabledInput={true}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <InputField
              label={t('signUpPage.confirmPassword')}
              icon={
                isConfirmPasswordVisible
                  ? require('../../assets/images/opened-eye.png')
                  : require('../../assets/images/closed-eye.png')
              }
              secureTextEntry={!isConfirmPasswordVisible}
              onIconPress={handleConfirmPasswordIconPress}
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
        title={t('signUpPage.signUp')}
        onPress={handleSubmit(handleSignUpPress)}
        isLoading={isLoading}
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputs: {
    gap: 16,
    marginTop: 32,
    marginBottom: 48,
  },
  formHeader: {
    marginTop: 26,
  },
});
