import * as yup from 'yup';

export const visaInformationValidationSchema = yup.object({
  citizenship: yup.string().required(),
  residencePermit: yup.string().required(),
  occupation: yup.string().required(),
  destinationCountry: yup.string().required(),
});
