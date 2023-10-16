import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { InputField } from '../Login/InputField';
import { FormButton } from '../UI/FormButton';
import { Controller, useForm } from 'react-hook-form';
import { cardSchema } from '../../util/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../../store/UserContext';
import { useNavigation } from '@react-navigation/native';
import { NotchHeader } from './NotchHeader';
import { formatCardNumber, formatExpireDate } from '../../util/formatter';
import { FormError } from '../Login/FormError';
import { getAddCardErrorMessage } from '../../util/errors';
import { CheckoutContext } from '../../store/CheckoutContext';
import { CreditCard } from '../../types/interfaces/CreditCard';
import { getCardBrand } from '../../util/getCardBrand';

export interface CardInputs {
  nameOnCard: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
}
export function CardForm() {
  const navigation = useNavigation<any>();
  const userCtx = useContext(UserContext);
  const checkoutCtx = useContext(CheckoutContext);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<CardInputs>({
    mode: 'onChange',
    resolver: yupResolver(cardSchema),
    defaultValues: {
      nameOnCard: '',
      cardNumber: '',
      expireDate: '',
      cvv: '',
    },
  });
  useEffect(() => {
    setErrorMessage(getAddCardErrorMessage(errors));
  }, [{ ...errors }]);
  function handleSave(data: CardInputs) {
    const brand = getCardBrand(data.cardNumber);
    if (brand) {
      const creditCard: CreditCard = {
        fullName: data.nameOnCard,
        cardNumber: data.cardNumber,
        expireDate: data.expireDate,
        cvv: data.cvv,
        brand: brand,
      };
      navigation.navigate('Checkout');
      userCtx.addCreditCard(creditCard);
      checkoutCtx.addCreditCard(creditCard);
      checkoutCtx.addPaymentMethod('creditCard');
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <NotchHeader title="Add new card" />
        <View style={styles.inputsContainer}>
          <Controller
            control={control}
            name="nameOnCard"
            render={({ field, fieldState }) => (
              <InputField
                label={'Name on card'}
                error={fieldState.invalid}
                value={field.value}
                onChangeText={field.onChange}
                enabledInput={true}
                style={styles.input}
              />
            )}
          />
          <Controller
            control={control}
            name="cardNumber"
            render={({ field, fieldState }) => (
              <InputField
                label={'Card Number'}
                error={fieldState.invalid}
                value={formatCardNumber(field.value)}
                onChangeText={field.onChange}
                enabledInput={true}
                icon={getCardBrand(field.value)?.logo}
                iconStyles={styles.cardBrand}
                style={styles.input}
                inputProps={{
                  keyboardType: 'number-pad'
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="expireDate"
            render={({ field, fieldState }) => (
              <InputField
                label={'Expire Date'}
                error={fieldState.invalid}
                value={formatExpireDate(field.value)}
                onChangeText={field.onChange}
                enabledInput={true}
                style={styles.input}
                inputProps={{
                  keyboardType: 'number-pad'
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="cvv"
            render={({ field, fieldState }) => (
              <InputField
                label={'CVV'}
                error={fieldState.invalid}
                value={field.value}
                onChangeText={field.onChange}
                enabledInput={true}
                style={styles.input}
                inputProps={{
                  keyboardType: 'number-pad'
                }}
              />
            )}
          />
        </View>
        <View style={styles.error}>
          <FormError message={errorMessage} />
        </View>
      </View>
      <FormButton
        title="Add Card"
        onPress={handleSubmit((data) => handleSave(data))}
        disabled={!isValid}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: Colors.gray_200,
    borderWidth: 1,
    minWidth: '90%',
    maxWidth: '90%',
  },
  inputsContainer: {
    paddingTop: 32,
    gap: 16,
    alignSelf: 'center',
  },
  error: {
    paddingLeft: '5%',
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: 12,
    marginTop: 24,
  },
  cardBrand: {
    width: 50,
    height: 40,
    right: 16,
  },
});