import { useIntl } from 'react-intl';
import * as yup from 'yup';

export const useValidationSchema = () => {
  const { formatMessage } = useIntl();

  const flightInformationValidationSchema = yup.object().shape({
    cruise: yup
      .object()
      .shape({
        label: yup.string().required(),
        value: yup.string().required(),
        _index: yup.number().required(),
      })
      .typeError(
        formatMessage({
          id: 'screen.visa.flightInformation.input.error.general.cruise',
        })
      ),
    kindOfVisa: yup
      .object()
      .shape({
        label: yup.string().required(),
        value: yup.string().required(),
        _index: yup.number().required(),
      })
      .typeError(
        formatMessage({
          id: 'screen.visa.flightInformation.input.error.general.kindOfVisa',
        })
      ),
    recipientSameAsApplicant: yup
      .object()
      .shape({
        label: yup.string().required(),
        value: yup.string().required(),
        _index: yup.number().required(),
      })
      .typeError(
        formatMessage({
          id:
            'screen.visa.flightInformation.input.error.general.recipientSameAsApplicant',
        })
      ),
  });

  return { flightInformationValidationSchema };
};
