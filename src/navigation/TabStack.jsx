/* eslint-disable react/no-unstable-nested-components */
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ROUTES } from 'helpers/constants/routes';
import { Account, Home } from 'screens';
import { Visa } from 'screens/Visa';
import { MyTheme, themeStyle } from 'styles/theme/theme.extended';

const Tab = createBottomTabNavigator();

export const MainTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: MyTheme.colors.primaryBrand,
        tabBarInactiveTintColor: MyTheme.colors.disabled,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 56,
          bottom: 15,
          borderRadius: 14,
          borderTopColor: MyTheme.colors.white,
          left: 20,
          right: 20,
          ...themeStyle.shadow,
        },
      }}
      initialRouteName={ROUTES.HOME}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.VISA_HOME}
        component={Visa}
        options={{
          tabBarLabel: 'Visa',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="passport" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.ACCOUNT}
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
