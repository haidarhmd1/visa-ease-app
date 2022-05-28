import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from 'res/constants/routes';
import { Home, VisaApplication, Profile } from 'screens';

const { Navigator, Screen } = createBottomTabNavigator();

export const MainScreenTabNavigation = () => {
    return (
        <Navigator
            initialRouteName={ROUTES.MAIN}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === ROUTES.MAIN) {
                        iconName = focused ? (
                            <Ionicons
                                name='home-sharp'
                                size={size}
                                color={color}
                            />
                        ) : (
                            <Ionicons
                                name='ios-home-outline'
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === ROUTES.VISA_APP) {
                        iconName = focused ? (
                            <MaterialCommunityIcons
                                name='shield-airplane'
                                size={size}
                                color={color}
                            />
                        ) : (
                            <MaterialCommunityIcons
                                name='shield-airplane-outline'
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === ROUTES.PROFILE) {
                        iconName = focused ? (
                            <Ionicons
                                name='ios-person'
                                size={size}
                                color={color}
                            />
                        ) : (
                            <Ionicons
                                name='ios-person-outline'
                                size={size}
                                color={color}
                            />
                        );
                    }
                    return iconName;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Screen name={ROUTES.MAIN} component={Home} />
            <Screen name={ROUTES.VISA_APP} component={VisaApplication} />
            <Screen name={ROUTES.PROFILE} component={Profile} />
        </Navigator>
    );
};
