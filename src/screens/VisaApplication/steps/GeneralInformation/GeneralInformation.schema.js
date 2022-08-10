import * as yup from 'yup';

export const generalInformationValidationSchema = yup.object({
  fullname: yup.string().required(),
  street: yup.string().required(),
  zipCode: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  fax: yup.string().optional(),
});
