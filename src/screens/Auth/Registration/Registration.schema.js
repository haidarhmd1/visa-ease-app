import * as yup from 'yup';

const MobilePhoneRegex = /^(\+\d{1,3}[-\s]?)?\d{1,3}([-\s]?\d{2,5}){2,5}$/;

export const registrationValidationSchema = yup.object({
  fullname: yup.string().required('Full name is required'),
  password: yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Must match "password" field value'),
  gender: yup.mixed().oneOf(['male', 'female', 'diverse']),
  country: yup.string().required('Country is required'),
  email: yup.string().required('email is required').email(),
  phone: yup
    .string()
    .required('phone is required')
    .matches(MobilePhoneRegex, 'e.g. +49 30 27578642')
    .optional(),
});
