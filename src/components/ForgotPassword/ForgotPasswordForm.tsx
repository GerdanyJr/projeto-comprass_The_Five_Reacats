import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Control, Controller, UseFormHandleSubmit } from 'react-hook-form';
import { InputField } from '../Login/InputField';
import { FormButton } from '../UI/FormButton';
import { FormError } from '../Login/FormError';
import { ForgotPasswordInputs } from '../../screens/ForgotPasswordScreen';

interface ForgotPasswordFormProps {
  control: Control<ForgotPasswordInputs, any>;
  handleSubmit: UseFormHandleSubmit<ForgotPasswordInputs, undefined>;
  handleSearchPress: (data: ForgotPasswordInputs) => void;
  handleConfirmPress: (data: ForgotPasswordInputs) => void;
  isPasswordVisible: boolean;
  handleIconPress: () => void;
  errorMessage: string;
  isLoading: boolean;
  isSearchDisabled?: boolean;
  isConfirmDisabled?: boolean
}

export const ForgotPasswordForm = ({
  control,
  handleSubmit,
  handleSearchPress,
  handleConfirmPress,
  isPasswordVisible,
  handleIconPress,
  errorMessage,
  isLoading,
  isSearchDisabled,
  isConfirmDisabled
}: ForgotPasswordFormProps) => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputs}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please insert a valid email',
            },
          }}
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
          name="password"
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
          render={({ field, fieldState }) => (
            <InputField
              label="New Password"
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
        <Controller
          control={control}
          name="confirmPassword"
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
          render={({ field, fieldState }) => (
            <InputField
              label="New Password"
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
        <FormError message={errorMessage}/>
      </View>
      <View style={styles.buttonContainer}>
      <FormButton
        title="Search"
        onPress={handleSubmit(handleSearchPress)}
        isLoading={isLoading}
        disabled={isSearchDisabled}
      />
      <FormButton
        title="Confirm"
        onPress={handleSubmit(handleConfirmPress)}
        isLoading={isLoading}
        disabled={isConfirmDisabled}
      />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    formContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 32,
        gap: 64
      },
      inputs: {
        marginTop: 32,
        gap: 16,
      },
      buttonContainer: {
        gap: 16
      }
});