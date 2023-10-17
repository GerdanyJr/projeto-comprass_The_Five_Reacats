import * as yup from 'yup';
import '../lib/i18n';
import i18n from '../lib/i18n';

export const signUpSchema = yup.object({
  name: yup.string().required(i18n.t('formErrors.emptyNameError')),
  email: yup
    .string()
    .required(i18n.t('formErrors.emptyEmailError'))
    .email(i18n.t('formErrors.invalidEmailError')),
  password: yup
    .string()
    .required(i18n.t('formErrors.emptyPasswordError'))
    .min(6, i18n.t('formErrors.shortPasswordError')),
  confirmPassword: yup
    .string()
    .required(i18n.t('formErrors.emptyConfirmPasswordError'))
    .oneOf(
      [yup.ref('password')],
      i18n.t('formErrors.invalidConfirmPasswordError')
    ),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .required(i18n.t('formErrors.emptyEmailError'))
    .email(i18n.t('formErrors.invalidEmailError')),
  password: yup
    .string()
    .required(i18n.t('formErrors.emptyPasswordError'))
    .min(6, i18n.t('formErrors.shortPasswordError')),
});

export const addressSchema = yup.object({
  cep: yup
    .string()
    .required(i18n.t('formErrors.emptyZipCodeError'))
    .matches(/^[0-9]{5}-[0-9]{3}$/, i18n.t('formErrors.invalidZipCodeError')),
  address: yup
    .string()
    .required(i18n.t('formErrors.emptyAddressError'))
    .min(10, i18n.t('formErrors.shortAddressCodeError')),
  city: yup
    .string()
    .required(i18n.t('formErrors.emptyCityError'))
    .min(5, i18n.t('formErrors.shortCityError')),
  state: yup
    .string()
    .required(i18n.t('formErrors.emptyStateError'))
    .min(2, i18n.t('formErrors.shortStateError')),
  fullName: yup
    .string()
    .required(i18n.t('formErrors.emptyFullNameError'))
    .min(5, i18n.t('formErrors.shortFullNameError')),
});
export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .required(i18n.t('formErrors.emptyEmailError'))
    .email(i18n.t('formErrors.invalidEmailError')),
    password: yup
    .string()
    .required(i18n.t('formErrors.emptyPasswordError'))
    .min(6, i18n.t('formErrors.shortPasswordError')),
  confirmPassword: yup
    .string()
    .required(i18n.t('formErrors.emptyConfirmPasswordError'))
    .oneOf(
      [yup.ref('password')],
      i18n.t('formErrors.invalidConfirmPasswordError')
    ),
});
export const cardSchema = yup.object({
  nameOnCard: yup.string().required(i18n.t('formErrors.emptyNameOnCardError')),
  cardNumber: yup
    .string()
    .matches(
      /^\d{4}(?: \d{4}){3}$/,
      i18n.t('formErrors.invalidCardNumberError')
    )
    .required(i18n.t('formErrors.emptyCardNumberError')),
  expireDate: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      i18n.t('formErrors.invalidExpDateError')
    )
    .required(i18n.t('formErrors.emptyExpDateError')),
  cvv: yup
    .string()
    .matches(/^\d{3,4}$/, i18n.t('formErrors.invalidCVVError'))
    .required(i18n.t('formErrors.emptyCVVError')),
});
