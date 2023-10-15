import { FieldErrors } from 'react-hook-form';
import { Inputs } from '../screens/LoginScreen';
import { SignUpInputs } from '../screens/SignUpScreen';
import { ShippingAddressInputs } from '../components/Checkout/ShippingAddressForm';

export function getErrorMessageByCode(httpCode: number): string {
  switch (httpCode) {
    case 401:
      return 'Your email or password is incorrect';
    case 403:
      return 'Forbidden. You do not have permission to access this resource.';
    default:
      return 'Something happened, try again later';
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
export function getShippingsErrorMessage(errors: FieldErrors<ShippingAddressInputs>) {
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