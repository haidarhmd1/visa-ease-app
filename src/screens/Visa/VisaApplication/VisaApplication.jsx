import React, { useState } from 'react';
import { Information } from 'screens/Visa/VisaApplication/steps/Information';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppHeader } from 'components/general/AppHeader';
import { ROUTES } from 'res/constants/routes';
import { ScrollView } from 'react-native';
import { useIntl } from 'react-intl';
import { GeneralInformation } from './steps/GeneralInformation';
import { VisaInformation } from './steps/VisaInformation';
import { FlightInformation } from './steps/FlightInformation';
import { Agreement } from './steps/Agreement';
import { customerInitValueForm } from './RegisterForm.helper';
import { CaptureDocuments } from './steps/Passport';
import { ConfirmForm } from './steps/ConfirmForm';

const TOTAL_STEP = 7;

export const VisaApplication = ({ route, navigation }) => {
  const intl = useIntl();
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const { id } = route.params;

  const reference = React.useRef(null);

  const [data, setData] = useState(customerInitValueForm);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = newData => {
    setData(step => ({ ...step, ...newData }));
    setCurrentStep(step => step + 1);
    if (currentStep === TOTAL_STEP - 1) {
      console.log(1);
    }
    reference.current?.scrollTo({ x: 0, y: 0, animated: true });
  };
  const previousStep = () => {
    setCurrentStep(step => step - 1);
    reference.current?.scrollTo({ x: 0, y: 0, animated: true });
  };

  const editFromBeginning = () => {
    setCurrentStep(1);
  };

  const steps = [
    <Information key={0} next={nextStep} data={data} />,
    <GeneralInformation
      key={1}
      next={nextStep}
      prev={previousStep}
      data={data}
    />,
    <VisaInformation key={2} next={nextStep} prev={previousStep} data={data} />,
    <FlightInformation
      key={3}
      next={nextStep}
      prev={previousStep}
      data={data}
    />,
    <CaptureDocuments key={4} next={nextStep} data={data} isPassportPicture />,
    <CaptureDocuments key={5} next={nextStep} data={data} />,
    <Agreement
      next={nextStep}
      key={6}
      data={data}
      setScrollEnabled={setScrollEnabled}
      prev={previousStep}
    />,
    <ConfirmForm
      next={nextStep}
      key={7}
      data={data}
      editFromBeginning={editFromBeginning}
    />,
  ];

  const goBack = () => {
    navigation.navigate(ROUTES.VISA_HOME);
  };

  return (
    <>
      {currentStep === 0 ? (
        <AppHeader
          goBack={goBack}
          title={intl.formatMessage({ id: 'visaApplication.header.title' })}
          navigation={navigation}
        />
      ) : (
        <AppHeader
          goBack={previousStep}
          title={`${intl.formatMessage({
            id: 'visaApplication.header.progress.title',
          })} ${currentStep} / ${TOTAL_STEP}`}
          navigation={navigation}
        />
      )}
      <ScrollView ref={reference} scrollEnabled={scrollEnabled}>
        <KeyboardAwareScrollView>{steps[currentStep]}</KeyboardAwareScrollView>
      </ScrollView>
    </>
  );
};
