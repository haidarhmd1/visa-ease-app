import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'res/constants/routes';
import { Account, Home, Profile, VisaApplication } from 'screens';
import { noHeader } from 'utils/screenOptions';
import { Visa } from 'screens/Visa';
import { Legalization } from 'screens/Legalization';
import { Translation } from 'screens/Translation';
import { Rates } from 'screens/Rates';
import { GeneralInformation } from 'components/Shared/GeneralInformation';
import { VisaInformation } from 'components/VisaInformation';
import { FlightInformation } from 'components/FlightInformation';
import { Passport } from 'components/Shared/Passport';
import { ResidencePermit } from 'components/Shared/ResidencePermit';
import { BiometricImage } from 'components/Shared/BiometricImage';
import { useQuery } from 'react-query';
import { getUser } from 'network/api';
import { ActivityIndicator } from 'react-native-paper';
import { MyTheme } from 'styles/theme/theme.extended';
import { useAuthStore, useUserStore } from 'store/zustand';
import { PersonalInformation } from 'screens/Profile/ProfileDetails/PersonalInformation';
import { AddressInformation } from 'screens/Profile/ProfileDetails/AddressInformation';
import { LoginInformation } from 'screens/Profile/ProfileDetails/LoginInformation';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Main from 'react-native-country-picker-modal';
import { ProfileDetails } from 'screens/Profile/ProfileDetails';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const MainStack = () => {
  const signOut = useAuthStore(state => state.signOut);
  const setUserInfo = useUserStore(state => state.setUserInfo);

  const { isLoading, error, data } = useQuery('getUser', getUser);

  useEffect(() => {
    if (!data) return;
    setUserInfo(data.data);
  }, [data, setUserInfo]);

  if (isLoading) {
    return <ActivityIndicator animating color={MyTheme.colors.primaryBrand} />;
  }
  if (error?.response.status === 404) {
    signOut();
  }

  return (
    <Stack.Navigator
      screenOptions={{
        ...noHeader,
      }}
      initialRouteName={ROUTES.MAIN}
    >
      <>
        {/* <Tab.Navigator>
          <Tab.Screen name={ROUTES.ACCOUNT} component={Account} />
          <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
        </Tab.Navigator> */}
        <Stack.Group>
          <Stack.Screen name={ROUTES.MAIN} component={Home} />
          <Stack.Screen name={ROUTES.VISA_HOME} component={Visa} />
          <Stack.Screen name={ROUTES.LEGALIZATION} component={Legalization} />
          <Stack.Screen name={ROUTES.TRANSLATION} component={Translation} />
          <Stack.Screen name={ROUTES.RATES} component={Rates} />
          <Stack.Screen name={ROUTES.VISA_APP} component={VisaApplication} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name={ROUTES.VISA_INFORMATION.visaInformation}
            component={VisaInformation}
          />
          <Stack.Screen
            name={ROUTES.VISA_INFORMATION.flightInformation}
            component={FlightInformation}
          />
          <Stack.Screen
            name={ROUTES.VISA_INFORMATION.passportPicture}
            component={Passport}
          />
          <Stack.Screen
            name={ROUTES.VISA_INFORMATION.residencePermit}
            component={ResidencePermit}
          />
          <Stack.Screen
            name={ROUTES.VISA_INFORMATION.biometricImage}
            component={BiometricImage}
          />
        </Stack.Group>
        <Stack.Group>
          {/* <Stack.Screen name={ROUTES.ACCOUNT} component={Account} /> */}
          {/* <Stack.Screen name={ROUTES.PROFILE} component={Profile} /> */}
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name={ROUTES.PROFILE_EDIT.personalInformation}
            component={PersonalInformation}
          />
          <Stack.Screen
            name={ROUTES.PROFILE_EDIT.addressInformation}
            component={AddressInformation}
          />
          <Stack.Screen
            name={ROUTES.PROFILE_EDIT.loginInformation}
            component={LoginInformation}
          />
        </Stack.Group>
      </>
    </Stack.Navigator>
  );
};
