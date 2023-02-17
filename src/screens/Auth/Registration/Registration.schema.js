import * as yup from 'yup';

const MobilePhoneRegex = /^(\+\d{1,3}[-\s]?)?\d{1,3}([-\s]?\d{2,5}){2,5}$/;

export const registrationValidationSchema = yup.object({
  fullname: yup.string().required('Full name is required'),
  gender: yup.mixed().oneOf(['male', 'female', 'diverse']),
  country: yup.string().required('Country is required'),
  email: yup.string().required('email is required').email(),
  phone: yup
    .string()
    .required('phone is required')
    .matches(MobilePhoneRegex, 'e.g. +49 30 27578642')
    .optional(),
});
