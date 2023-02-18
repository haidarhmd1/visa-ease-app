import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'res/constants/routes';
import { Account, Home, Profile, VisaApplication } from 'screens';
import { noHeader } from 'utils/screenOptions';
import { Visa } from 'screens/Visa';
import { Legalization } from 'screens/Legalization';
import { Translation } from 'screens/Translation';
import { Rates } from 'screens/Rates';
import { GeneralInformation } from 'components/GeneralInformation';
import { VisaInformation } from 'components/VisaInformation';
import { FlightInformation } from 'components/FlightInformation';
import { CaptureDocuments } from 'components/Passport';
import { Agreement } from 'components/Agreement';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ ...noHeader }}
      initialRouteName={ROUTES.MAIN}
    >
      <>
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
            name={ROUTES.VISA_INFORMATION.generalInformation}
            component={GeneralInformation}
          />
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
            component={CaptureDocuments}
          />
          <Stack.Screen
            name={ROUTES.VISA_INFORMATION.residencePermit}
            component={GeneralInformation}
          />
          <Stack.Screen
            name={ROUTES.VISA_INFORMATION.biometricImage}
            component={GeneralInformation}
          />
          <Stack.Screen
            name={ROUTES.VISA_INFORMATION.agreement}
            component={Agreement}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name={ROUTES.ACCOUNT} component={Account} />
          <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
        </Stack.Group>
      </>
    </Stack.Navigator>
  );
};
