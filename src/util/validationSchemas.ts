import * as yup from 'yup';

export const signUpSchema = yup.object({
  name: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .required('Please enter your email')
    .email('Please insert a valid email'),
  password: yup.string().required('Please enter your password').min(6),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf(
      [yup.ref('password')],
      'Your password is not the same as your confirmation'
    ),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Please enter your email')
    .email('Please insert a valid email'),
  password: yup.string().required('Please enter your password').min(6),
});

export const addressSchema = yup.object({
  cep: yup
    .string()
    .required('ZIP code is required')
    .matches(/^[0-9]{5}-[0-9]{3}$/, 'Invalid ZIP code'),
  address: yup
    .string()
    .required('Address is required')
    .min(10, 'Address must be at least 10 characters long'),
  city: yup
    .string()
    .required('City is required')
    .min(2, 'City must be at least 2 characters long'),
  state: yup
    .string()
    .required('State is required')
    .min(2, 'State must be at least 2 characters long'),
  fullName: yup
    .string()
    .required('Full name is required')
    .min(5, 'Full name must be at least 5 characters long'),
});
export const cardSchema = yup.object({
  nameOnCard: yup.string().required('Name on card is required'),
  cardNumber: yup
    .string()
    .matches(
      /^\d{4}(?: \d{4}){3}$/,
      'Card number must be in the format XXXX XXXX XXXX XXXX'
    )
    .required('Card number is required'),
  expireDate: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      'Expiration date must be in MM/YY format'
    )
    .required('Expiration date is required'),
  cvv: yup
    .string()
    .matches(/^\d{3,4}$/, 'CVV must contain 3 or 4 digits')
    .required('CVV is required'),
});