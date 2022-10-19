import React from 'react';
import { Card } from 'components/general/Layout/Layout';
import {
  RegularCaption,
  TitleBold,
} from 'components/general/Typography/Typography';

export const VisaStatus = () => {
  return (
    <Card>
      <TitleBold>Visa Status</TitleBold>
      <RegularCaption>In Progress...</RegularCaption>
    </Card>
  );
};
