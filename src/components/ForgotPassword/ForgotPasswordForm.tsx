import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { InputField } from '../Login/InputField';
import { FormButton } from '../UI/FormButton';
import { FormError } from '../Login/FormError';
import { FormHeader } from '../UI/FormHeader';
import { ForgotPasswordInputs } from '../../screens/ForgotPasswordScreen';
import { useTranslation } from 'react-i18next';

interface ForgotPasswordFormProps {
  control: Control<ForgotPasswordInputs, any>;
  errorMessage: string;
  isLoading: boolean;
  isPasswordVisible: boolean;
  isEmailFound: boolean;
  invalidEmail: boolean;
  isValid: boolean;
  isConfirmPasswordVisible: boolean;
  emailValue: string;
  errors: FieldErrors<ForgotPasswordInputs>;
  handleSearchPress: (email: string) => void;
  handleConfirmPress: (data: ForgotPasswordInputs) => void;
  handleSubmit: UseFormHandleSubmit<ForgotPasswordInputs, undefined>;
  handlePasswordIconPress: () => void;
  handleConfirmPasswordIconPress: () => void;
}

export function ForgotPasswordForm({
  control,
  errorMessage,
  isLoading,
  isPasswordVisible,
  isConfirmPasswordVisible,
  isEmailFound,
  invalidEmail,
  emailValue,
  isValid,
  handleSubmit,
  handleSearchPress,
  handleConfirmPress,
  handlePasswordIconPress,
  handleConfirmPasswordIconPress,
}: ForgotPasswordFormProps) {
  const { t } = useTranslation();
  return (
    <>
      <FormHeader
        title={t('forgotPasswordPage.forgotPassword')}
        description={t('forgotPasswordPage.instructions')}
        style={styles.formHeader}
      />
      <View style={styles.inputs}>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <InputField
              label={t('forgotPasswordPage.email')}
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
              label={t('forgotPasswordPage.password')}
              icon={
                isPasswordVisible
                  ? require('../../assets/images/opened-eye.png')
                  : require('../../assets/images/closed-eye.png')
              }
              secureTextEntry={!isPasswordVisible}
              onIconPress={handlePasswordIconPress}
              error={fieldState.invalid}
              value={field.value}
              enabledInput={isEmailFound && !invalidEmail}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <InputField
              label={t('forgotPasswordPage.confirmPassword')}
              icon={
                isConfirmPasswordVisible
                  ? require('../../assets/images/opened-eye.png')
                  : require('../../assets/images/closed-eye.png')
              }
              secureTextEntry={!isConfirmPasswordVisible}
              onIconPress={handleConfirmPasswordIconPress}
              error={fieldState.invalid}
              value={field.value}
              enabledInput={isEmailFound && !invalidEmail}
              onChangeText={field.onChange}
            />
          )}
        />
        <FormError message={errorMessage} />
      </View>
      <View style={styles.buttons}>
        <FormButton
          title={t('forgotPasswordPage.search')}
          onPress={() => handleSearchPress(emailValue)}
          disabled={invalidEmail}
          isLoading={isLoading}
        />
        <FormButton
          title={t('forgotPasswordPage.confirm')}
          onPress={handleSubmit(handleConfirmPress)}
          disabled={invalidEmail || !isEmailFound || !isValid}
          isLoading={isLoading}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formHeader: {
    marginTop: 26,
  },
  inputs: {
    gap: 16,
    marginTop: 32,
  },
  buttons: {
    gap: 16,
    marginTop: 20,
  },
});
