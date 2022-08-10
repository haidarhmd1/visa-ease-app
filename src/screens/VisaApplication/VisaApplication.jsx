import React, { useEffect, useState } from 'react';
import { Layout } from 'components/general/Layout/Layout';
import { ScrollView, Text, View } from 'react-native';
import { Information } from 'components/general/Information';
import {
  HeadlineBold,
  SubHeadline,
  SubHeadlineBold,
} from 'components/general/Typography/Typography';
import { GeneralInformation } from './steps/GeneralInformation';
import { VisaInformation } from './steps/VisaInformation';
import { FlightInformation } from './steps/FlightInformation';
import { Agreement } from './steps/Agreement';
import { customerinitValueForm } from './RegisterForm.helper';
import { Passport } from './steps/Passport';

const TOTAL_STEP = 6;

export const VisaApplication = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [data, setData] = useState(customerinitValueForm);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = newData => {
    setData(step => ({ ...step, ...newData }));
    setCurrentStep(step => step + 1);
  };
  const previousStep = () => {
    setCurrentStep(step => step - 1);
  };

  const steps = [
    // <Information key={0} next={nextStep} />,
    // <GeneralInformation
    //   key={1}
    //   next={nextStep}
    //   prev={previousStep}
    //   data={data}
    // />,
    // <VisaInformation key={2} next={nextStep} prev={previousStep} data={data} />,
    // <FlightInformation
    //   key={3}
    //   next={nextStep}
    //   prev={previousStep}
    //   data={data}
    // />,
    <Passport key={4} />,
    // <Agreement
    //   next={nextStep}
    //   key={5}
    //   data={data}
    //   setScrollEnabled={setScrollEnabled}
    //   prev={previousStep}
    // />,
  ];
  // console.log('data', data);
  return (
    <>
      {currentStep > 0 && (
        <View
          style={{
            height: 40,
            width: '100%',
            backgroundColor: 'white',
            padding: 6,
          }}
        >
          <SubHeadlineBold
            style={{
              paddingTop: 4,
              textAlign: 'center',
              alignSelf: 'center',
            }}
          >
            Completed {currentStep} / {TOTAL_STEP}
          </SubHeadlineBold>
        </View>
      )}
      <ScrollView scrollEnabled={scrollEnabled}>
        <Layout>{steps[currentStep]}</Layout>
      </ScrollView>
    </>
  );
};
