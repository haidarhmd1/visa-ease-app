import * as Yup from 'yup';

export const agreementValidationSchema = Yup.object().shape({
  // date: Yup.date()
  //   .required('Start date is required')
  //   .min(new Date(Date.now()), "Start date can't be in the past"),
  place: Yup.string().required(),
  signatureFile: Yup.string().required(),
});
