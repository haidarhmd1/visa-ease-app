import * as Yup from 'yup';

export const agreementValidationSchema = Yup.object().shape({
  dateOfSignature: Yup.date().required('Date is required'),
  place: Yup.string().required(),
  signature: Yup.string().required(),
});
