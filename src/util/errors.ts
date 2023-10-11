import { FieldErrors } from 'react-hook-form';
import { Inputs } from '../screens/LoginScreen';
import { SignUpInputs } from '../screens/SignUpScreen';
import { ForgotPasswordInputs } from '../screens/ForgotPasswordScreen';

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

export function getForgotPasswordFormErrorMessage(errors: FieldErrors<ForgotPasswordInputs>) {
  if (errors.email?.message) {
    return errors.email.message;
  } else if (errors.password?.message) {
    return errors.password.message;
  } else if (errors.confirmPassword?.message) {
    return errors.confirmPassword.message;
  } else return '';
}
