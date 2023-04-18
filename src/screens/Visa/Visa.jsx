import React, { useState } from 'react';
import { View } from 'react-native';
import { Layout, Spacer } from 'components/general/Layout/Layout';
import { useIntl } from 'react-intl';
import { Text } from 'react-native-paper';
import { PalmImage } from 'assets/images';
import { StickyHeaderWrapper } from 'components/general/StickyHeaderWrapper';
import { WorldIllustration } from 'assets/illustrations';
import { VisaApplyButton } from 'screens/Visa/VisaApplyButton';
import { VisaIconWrapper } from 'screens/Visa/VisaIconWrapper';
import { VisaFloatingCardContent } from 'screens/Visa/VisaFloatingCardContent';
import { SpacerDivider } from 'components/SpacerDivider';
import { VisaSelectCountryModal } from './VisaSelectCountryModal';

export const Visa = ({ navigation }) => {
  const intl = useIntl();
  const [visible, setVisible] = useState(false);

  return (
    <StickyHeaderWrapper
      appBarTitle={intl.formatMessage({ id: 'visastar.home.services.visa' })}
      imageSrc={PalmImage}
      navigation={navigation}
      floatingCardContent={<VisaFloatingCardContent />}
    >
      <Layout style={{ marginTop: 75 }}>
        <View>
          <Text variant="headlineSmall">Halten sie Bereit: </Text>
        </View>
        <Spacer />
        <VisaIconWrapper />
        <SpacerDivider />
        <VisaApplyButton
          setVisible={setVisible}
          imageSrc={WorldIllustration}
          title="Apply for a Visa"
          description="Start your Journey!"
        />
      </Layout>

      <VisaSelectCountryModal visible={visible} setVisible={setVisible} />
    </StickyHeaderWrapper>
  );
};
