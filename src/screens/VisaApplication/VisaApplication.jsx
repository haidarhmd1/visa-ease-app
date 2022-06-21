import React, { useState } from 'react';
import { Layout } from 'components/general/Layout/Layout';
import { ScrollView } from 'react-native';
import { GeneralInformation } from './steps/GeneralInformation';
import { VisaInformation } from './steps/VisaInformation';
import { FlightInformation } from './steps/FlightInformation';
import { Agreement } from './steps/Agreement';
import { customerinitValueForm } from './RegisterForm.helper';

export const VisaApplication = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [data, setData] = useState(customerinitValueForm);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = newData => {
    setData(step => ({ ...step, ...newData }));
    setCurrentStep(step => step + 1);
  };
  const previousStep = newData => {
    setData(step => ({ ...step, ...newData }));
    setCurrentStep(step => step - 1);
  };

  const steps = [
    <GeneralInformation key={0} next={nextStep} data={data} />,
    <VisaInformation key={1} next={nextStep} prev={previousStep} data={data} />,
    <FlightInformation
      key={2}
      next={nextStep}
      prev={previousStep}
      data={data}
    />,
    <Agreement key={3} />,
  ];
  console.log('data', data);
  return (
    <ScrollView scrollEnabled={scrollEnabled}>
      <Layout>{steps[currentStep]}</Layout>
    </ScrollView>
  );
};
