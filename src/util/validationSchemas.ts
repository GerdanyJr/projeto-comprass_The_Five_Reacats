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