import React from 'react';
import { SafeAreaView } from 'react-native';
import { themeStyle } from 'styles';
import { MainScreenTabNavigation } from 'navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <SafeAreaView style={themeStyle.container}>
            <NavigationContainer>
                <MainScreenTabNavigation />
            </NavigationContainer>
        </SafeAreaView>
    );
}
