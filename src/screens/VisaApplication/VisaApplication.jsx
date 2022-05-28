import React, { useState } from 'react';
import { Layout } from 'components/general/Layout/Layout';
import { RegisterForm } from './steps/RegisterForm';
import { View, Button } from 'react-native';
import { Headline } from 'components/general/Typography/Typography';

export const VisaApplication = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep(currentStep + 1);
    const previousStep = () => setCurrentStep(currentStep - 1);

    const steps = [
        {
            id: 0,
            content: <RegisterForm next={nextStep} step={currentStep} />,
        },
        {
            id: 1,
            content: (
                <View>
                    <Headline>Test</Headline>
                    <Button onPress={() => nextStep()} title='Next' />
                </View>
            ),
        },
        {
            id: 2,
            content: (
                <View>
                    <Headline>Test 1</Headline>
                    <Button onPress={() => nextStep()} title='Next' />
                </View>
            ),
        },
        {
            id: 3,
            content: (
                <View>
                    <Headline>Test 2</Headline>
                    <Button onPress={() => nextStep()} title='Next' />
                </View>
            ),
        },
    ];

    return <Layout>{steps[currentStep].content}</Layout>;
};
