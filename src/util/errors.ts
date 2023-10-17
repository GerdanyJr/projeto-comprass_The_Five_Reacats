import { FieldErrors } from 'react-hook-form';
import { Inputs } from '../screens/LoginScreen';
import { SignUpInputs } from '../screens/SignUpScreen';
import { ShippingAddressInputs } from '../components/Checkout/ShippingAddressForm';
import { CardInputs } from '../components/Checkout/CardForm';
import i18n from '../lib/i18n';
import '../lib/i18n';

export function getErrorMessageByCode(httpCode: number): string {
  switch (httpCode) {
    case 401:
      return i18n.t('formErrors.401Error');
    case 403:
      return i18n.t('formErrors.403Error');
    default:
      return i18n.t('formErrors.defaultError');
  }
}
export function getLoginFormErrorMessage(errors: FieldErrors<Inputs>) {
  if (errors.email?.message) {
    return errors.email.message;
  } else if (errors.password?.message) {
    return errors.password.message;
  } else return '';
}
export function getSignUpFormErrorMessage(errors: FieldErrors<SignUpInputs>) {
  if (errors.email?.message) {
    return errors.email.message;
  } else if (errors.password?.message) {
    return errors.password.message;
  } else if (errors.confirmPassword?.message) {
    return errors.confirmPassword.message;
  } else if (errors.name?.message) {
    return errors.name.message;
  } else return '';
}
export function getShippingsErrorMessage(
  errors: FieldErrors<ShippingAddressInputs>
) {
  if (errors.address?.message) {
    return errors.address.message;
  } else if (errors.cep?.message) {
    return errors.cep.message;
  } else if (errors.city?.message) {
    return errors.city.message;
  } else if (errors.fullName?.message) {
    return errors.fullName.message;
  } else return '';
}
export function getAddCardErrorMessage(errors: FieldErrors<CardInputs>) {
  if (errors.nameOnCard?.message) {
    return errors.nameOnCard.message;
  } else if (errors.cardNumber?.message) {
    return errors.cardNumber.message;
  } else if (errors.expireDate?.message) {
    return errors.expireDate.message;
  } else if (errors.cvv?.message) {
    return errors.cvv.message;
  } else return '';
}
