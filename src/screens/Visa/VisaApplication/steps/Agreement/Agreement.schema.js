import * as Yup from 'yup';

export const agreementValidationSchema = Yup.object().shape({
  dateOfSignature: Yup.date()
    .required('Start date is required')
    .min(new Date(Date.now()), "Start date can't be in the past"),
  place: Yup.string().required(),
  signature: Yup.string().required(),
});
