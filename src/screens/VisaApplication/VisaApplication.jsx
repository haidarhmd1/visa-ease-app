import React, { useState } from 'react';
import { Layout } from 'components/general/Layout/Layout';
import { RegisterForm } from './steps/RegisterForm';
import { ScrollView, View, Button } from 'react-native';
import { Headline } from 'components/general/Typography/Typography';

export const VisaApplication = () => {
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);

    console.log('scrollEnabled', scrollEnabled);

    const nextStep = () => setCurrentStep(currentStep + 1);
    const previousStep = () => setCurrentStep(currentStep - 1);

    const steps = [
        {
            id: 0,
            content: (
                <RegisterForm
                    next={nextStep}
                    step={currentStep}
                    setScrollEnabled={setScrollEnabled}
                />
            ),
        },
        {
            id: 1,
            content: (
                <View>
                    <Headline>Test</Headline>
                    <Button onPress={() => nextStep()} title='Next' />
                    <Button onPress={() => previousStep()} title='Back' />
                </View>
            ),
        },
        {
            id: 2,
            content: (
                <View>
                    <Headline>Test 1</Headline>
                    <Button onPress={() => nextStep()} title='Next' />
                    <Button onPress={() => previousStep()} title='Back' />
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

    return (
        <ScrollView scrollEnabled={scrollEnabled}>
            <Layout>{steps[currentStep].content}</Layout>
        </ScrollView>
    );
};
