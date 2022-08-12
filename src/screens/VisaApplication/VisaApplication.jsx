import React, { useState } from 'react';
import { Information } from 'screens/VisaApplication/steps/Information';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from 'components/general/Header';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from 'res/constants/routes';
import { GeneralInformation } from './steps/GeneralInformation';
import { VisaInformation } from './steps/VisaInformation';
import { FlightInformation } from './steps/FlightInformation';
import { Agreement } from './steps/Agreement';
import { customerinitValueForm } from './RegisterForm.helper';
import { Passport } from './steps/Passport';
import { ResidencePermit } from './steps/ResidencePermit';
import { ConfirmForm } from './steps/ConfirmForm';

const TOTAL_STEP = 7;

export const VisaApplication = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [data, setData] = useState(customerinitValueForm);
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();

  const nextStep = newData => {
    setData(step => ({ ...step, ...newData }));
    setCurrentStep(step => step + 1);
  };
  const previousStep = () => {
    setCurrentStep(step => step - 1);
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
    <Passport key={4} next={nextStep} data={data} />,
    <ResidencePermit key={5} next={nextStep} data={data} />,
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
          title="Choose Visa Type"
          navigation={navigation}
        />
      ) : (
        <Header
          goBack={previousStep}
          title={`Completed ${currentStep} / ${TOTAL_STEP}`}
          navigation={navigation}
        />
      )}
      <KeyboardAwareScrollView scrollEnabled={scrollEnabled}>
        {steps[currentStep]}
      </KeyboardAwareScrollView>
    </>
  );
};
