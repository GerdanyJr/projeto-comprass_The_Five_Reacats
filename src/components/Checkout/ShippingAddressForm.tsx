import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { InputField } from '../Login/InputField';
import { FormButton } from '../UI/FormButton';
import { Controller, useForm } from 'react-hook-form';
import { addressSchema } from '../../util/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { formatCep } from '../../util/formatter';
import { getAddressByCep } from '../../service/address';
import { UserContext } from '../../store/UserContext';
import { ShippingAddress } from '../../types/interfaces/ShippingAddress';
import { useNavigation } from '@react-navigation/native';
import { CheckoutContext } from '../../store/CheckoutContext';
import { FormError } from '../Login/FormError';
import { getShippingsErrorMessage } from '../../util/errors';

export interface ShippingAddressInputs {
  cep: string;
  address: string;
  city: string;
  state: string;
  fullName: string;
}
export function ShippingAddressForm() {
  const navigation = useNavigation<any>();
  const userCtx = useContext(UserContext);
  const checkoutCtx = useContext(CheckoutContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    control,
    handleSubmit,
    watch,
    getFieldState,
    setValue,
    clearErrors,
    setError,
    formState: { isValid, errors },
  } = useForm<ShippingAddressInputs>({
    mode: 'onChange',
    resolver: yupResolver(addressSchema),
    defaultValues: {
      cep: '',
      address: '',
      city: '',
      state: '',
      fullName: '',
    },
  });
  useEffect(() => {
    async function getAddress() {
      setIsLoading(true);
      const address = await getAddressByCep(watch('cep'));
      if ('erro' in address) {
        setError('cep', { message: 'Zip code not found!' });
      } else {
        setValue('city', address.city);
        setValue('state', address.state);
        setValue('address', address.address);
        clearErrors('city');
        clearErrors('state');
        clearErrors('address');
      }
      setIsLoading(false);
    }
    if (!getFieldState('cep').invalid && watch('cep').length === 9) {
      try {
        setTimeout(getAddress, 500);
      } catch (error) {}
    }
  }, [watch('cep')]);
  useEffect(() => {
    setErrorMessage(() => getShippingsErrorMessage(errors));
  }, [{ ...errors }]);

  function handleSave(data: ShippingAddressInputs) {
    const newShippingAddress: ShippingAddress = {
      fullName: data.fullName,
      cep: data.cep,
      address: data.address,
      city: data.city,
      state: data.state,
    };
    userCtx.addShippingAddress(newShippingAddress);
    checkoutCtx.addShippingAddress(newShippingAddress);
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Controller
          control={control}
          name="cep"
          render={({ field, fieldState }) => (
            <InputField
              label={'Zip Code (Postal Code)'}
              error={fieldState.invalid}
              value={formatCep(field.value)}
              onChangeText={field.onChange}
              enabledInput={true}
              isLoading={isLoading}
              style={styles.grayBorder}
            />
          )}
        />
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <InputField
              label={'Address'}
              error={fieldState.invalid}
              value={field.value}
              onChangeText={field.onChange}
              enabledInput={!isLoading}
              style={styles.grayBorder}
            />
          )}
        />
        <Controller
          control={control}
          name="city"
          render={({ field, fieldState }) => (
            <InputField
              label={'City'}
              error={fieldState.invalid}
              value={field.value}
              onChangeText={field.onChange}
              enabledInput={!isLoading}
              style={styles.grayBorder}
            />
          )}
        />
        <Controller
          control={control}
          name="state"
          render={({ field, fieldState }) => (
            <InputField
              label={'State/Province/Region'}
              error={fieldState.invalid}
              value={field.value}
              onChangeText={field.onChange}
              enabledInput={!isLoading}
              style={styles.grayBorder}
            />
          )}
        />
        <Controller
          control={control}
          name="fullName"
          render={({ field, fieldState }) => (
            <InputField
              label={'Full name'}
              error={fieldState.invalid}
              value={field.value}
              onChangeText={field.onChange}
              enabledInput={!isLoading}
              style={styles.grayBorder}
            />
          )}
        />
        <FormError message={errorMessage} />
      </View>
      <FormButton
        title="Save Address"
        onPress={handleSubmit((data) => handleSave(data))}
        style={styles.button}
        disabled={!isValid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 32,
  },
  grayBorder: {
    borderColor: Colors.gray_200,
    borderWidth: 1,
  },
  inputs: {
    gap: 16,
  },
  button: {
    width: '90%',
    marginBottom: 16,
  },
});