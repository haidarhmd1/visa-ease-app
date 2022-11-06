import React, { useState } from 'react';
import { Information } from 'screens/VisaApplication/steps/Information';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from 'components/general/Header';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from 'res/constants/routes';
import { ScrollView } from 'react-native';
import { useIntl } from 'react-intl';
import { GeneralInformation } from './steps/GeneralInformation';
import { VisaInformation } from './steps/VisaInformation';
import { FlightInformation } from './steps/FlightInformation';
import { Agreement } from './steps/Agreement';
import { customerinitValueForm } from './RegisterForm.helper';
import { CaptureDocuments } from './steps/Passport';
import { ConfirmForm } from './steps/ConfirmForm';

const TOTAL_STEP = 7;

export const VisaApplication = () => {
  const intl = useIntl();
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const reference = React.useRef(null);

  const [data, setData] = useState(customerinitValueForm);
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();

  const nextStep = newData => {
    setData(step => ({ ...step, ...newData }));
    setCurrentStep(step => step + 1);
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
    navigation.navigate(ROUTES.MAIN);
  };

  return (
    <>
      {currentStep === 0 ? (
        <Header
          goBack={goBack}
          title={intl.formatMessage({ id: 'visaApplication.header.title' })}
          navigation={navigation}
        />
      ) : (
        <Header
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
