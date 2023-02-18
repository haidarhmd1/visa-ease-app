import * as yup from 'yup';

const MobilePhoneRegex = /^(\+\d{1,3}[-\s]?)?\d{1,3}([-\s]?\d{2,5}){2,5}$/;
const StreetRegex = /^[a-zA-Z0-9\s,'.-äöüÄÖÜñÑ]+ [0-9]+[a-zA-Z0-9\s,'.-äöüÄÖÜñÑ]*$/;

export const generalInformationValidationSchema = yup.object({
  fullname: yup.string().required('Full name is required'),
  gender: yup.mixed().oneOf(['male', 'female', 'diverse']),
  maritalStatus: yup
    .mixed()
    .oneOf(['married', 'single', 'widowed', 'divorced']),
  street: yup
    .string()
    .required('Street is required')
    .matches(StreetRegex, 'e.g. Friedrichstr. 95'),
  zipCode: yup.string().required('Zip code and City is required').max(5),
  city: yup.string().required('City is required'),
  country: yup.string().required('Country is required'),
  email: yup.string().required('email is required').email(),
  phone: yup
    .string()
    .required('phone is required')
    .matches(MobilePhoneRegex, 'e.g. +49 30 27578642'),
});
