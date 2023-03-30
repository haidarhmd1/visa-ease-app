import * as yup from 'yup';

export const visaInformationValidationSchema = yup.object({
  residencePermit: yup.string().required(),
  occupation: yup.string().required(),
});
