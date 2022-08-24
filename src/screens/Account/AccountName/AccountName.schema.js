import * as Yup from 'yup';

export const AccountValidationSchema = Yup.object().shape({
  fullname: Yup.string().required('Please enter'),
  email: Yup.string().required('Start date is required'),
  dob: Yup.date().required('Start date is required'),
});
