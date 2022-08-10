import * as Yup from 'yup';

export const flightInformationValidationSchema = Yup.object().shape({
  travelStartDate: Yup.date()
    .required('Start date is required')
    .min(new Date(Date.now()), "Start date can't be in the past"),
  returnFlightDate: Yup.date()
    .min(Yup.ref('travelStartDate'), "End date can't be before Start date")
    .required('Start date is required'),
});
