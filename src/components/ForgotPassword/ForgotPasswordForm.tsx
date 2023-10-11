import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Control,
  Controller,
  UseFormHandleSubmit,
  useForm,
} from 'react-hook-form';
import { InputField } from '../Login/InputField';
import { FormButton } from '../UI/FormButton';
import { FormError } from '../Login/FormError';
import {
  ForgotPasswordEmailInput,
  ForgotPasswordInputs,
} from '../../screens/ForgotPasswordScreen';
import { getForgotPasswordEmailErrorMessage } from '../../util/errors';

interface ForgotPasswordFormProps {
  pwcontrol: Control<ForgotPasswordInputs, any>;
  pwhandleSubmit: UseFormHandleSubmit<ForgotPasswordInputs, undefined>;
  handleSearchPress: (data: ForgotPasswordEmailInput) => void;
  handleConfirmPress: (data: ForgotPasswordInputs) => void;
  isPasswordVisible: boolean;
  handleIconPress: () => void;
  pwerrorMessage: string;
  isLoading: boolean;
  isConfirmButtonDisabled: boolean;
  isPasswordInputEnabled: boolean;
  isConfirmInputEnabled: boolean;
}

export const ForgotPasswordForm = ({
  pwcontrol,
  pwhandleSubmit,
  handleSearchPress,
  handleConfirmPress,
  isPasswordVisible,
  handleIconPress,
  pwerrorMessage,
  isLoading,
  isConfirmButtonDisabled,
  isPasswordInputEnabled,
  isConfirmInputEnabled,
}: ForgotPasswordFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordEmailInput>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });
  const [isSearchButtonDisabled, setisSearchButtonDisabled] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  useEffect(() => {
    setEmailErrorMessage(() => getForgotPasswordEmailErrorMessage(errors));
  }, [errors.email]);

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
          control={pwcontrol}
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
              enabledInput={isPasswordInputEnabled}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          control={pwcontrol}
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
              enabledInput={isConfirmInputEnabled}
              onChangeText={field.onChange}
            />
          )}
        />
        <FormError message={pwerrorMessage} />
        <FormError message={emailErrorMessage} />
      </View>
      <View style={styles.buttonContainer}>
        <FormButton
          title="Search"
          onPress={handleSubmit(handleSearchPress)}
          isLoading={isLoading}
          disabled={isSearchButtonDisabled}
        />
        <FormButton
          title="Confirm"
          onPress={pwhandleSubmit(handleConfirmPress)}
          isLoading={isLoading}
          disabled={isConfirmButtonDisabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    gap: 64,
  },
  inputs: {
    marginTop: 32,
    gap: 16,
  },
  buttonContainer: {
    gap: 16,
  },
});
