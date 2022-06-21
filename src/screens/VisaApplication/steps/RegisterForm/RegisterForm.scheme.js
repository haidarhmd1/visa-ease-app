import * as yup from 'yup';
import { parse, isDate } from 'date-fns';

const today = new Date();

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function parseDateString(value, originalValue) {
  return isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'YYYY-MM-dd', new Date());
}

export const visaApplicationRegisterValidationSchema = yup.object().shape({
  fullname: yup.string().required('Fullname is Required'),
  street: yup.string().required('Street is Required'),
  streetNr: yup.string().required('Street number is Required'),
  zipCode: yup.number().required('ZIP Code is Required'),
  city: yup.string().required('City is Required'),
  country: yup.string().required('Country is Required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  fax: yup.string().matches(phoneRegExp, 'FAX number is not valid').optional(),
  residencePermit: yup.string().required('Residence Permit is Required'),
  occupation: yup.string().required('Occupation is Required'),
  citizenship: yup.string().required('Citizenship is Required'),
  destinationCountry: yup.string().required('Destination Country is Required'),
  place: yup.string().required('Place is Required'),
  signature: yup.lazy(value => {
    switch (typeof value) {
      case 'undefined':
        return yup.string().default('myDefaultString');
      case 'string':
        return yup.string().strict();
      default:
        throw new yup.ValidationError('Value must be a string or `undefined`');
    }
  }),
  travelStartDate: yup.date().min(today).required('Date must be valid'),
  returnFlightDate: yup.date().min(today).required('Date must be valid'),
});
