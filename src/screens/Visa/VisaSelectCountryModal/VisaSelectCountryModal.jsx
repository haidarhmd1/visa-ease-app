import React, { useState } from 'react';
import { styles } from 'screens/Visa/Visa.styled';
import { ModalSheet } from 'components/general/ModalSheet';
import { ScrollView, View } from 'react-native';
import { Layout, Spacer, StyledCard } from 'components/general/Layout/Layout';
import { Card, Text } from 'react-native-paper';
import { PrimaryButton } from 'components/general/Buttons';
import { SpacerDivider } from 'components/SpacerDivider';
import { ROUTES } from 'res/constants/routes';
import { useNavigation } from '@react-navigation/native';
import { StyledDropdown } from 'components/StyledDropdown';

const visaCountries = [
  { value: 'uae', label: 'UAE', image: '' },
  { value: 'china', label: 'China', image: '' },
  { value: 'cuba', label: 'Cuba', image: '' },
];

const visaType = [
  { value: 'standard', label: 'Standard (7-10 Werktage)' },
  { value: 'express', label: 'Express (3 Werktage)' },
];

export const VisaSelectCountryModal = ({ visible, setVisible }) => {
  const navigation = useNavigation();

  const [countryValue, setCountryValue] = useState(null);
  const [isCountryDDLFocus, setIsCountryDDLFocus] = useState(false);

  const [visaTypeValue, setVisaTypeValue] = useState(null);
  const [isVisaTypeDDLFocus, setIsVisaTypeDDLFocus] = useState(false);

  const onCountrySelectedHandler = () => {
    setVisible(false);
    navigation.navigate(ROUTES.VISA_APP);
  };
  return (
    <ModalSheet
      visible={visible}
      setVisible={setVisible}
      detached={false}
      loadFullHeight
    >
      <ScrollView>
        <Layout>
          <StyledCard mode="elevated">
            <Card.Content>
              <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
                HINWEIS:
              </Text>
              <Text style={{ marginTop: 8 }}>
                Bearbeitungszeiten von Visa sind ungewiss, jedoch bemühen wir
                uns, es vor Reiseantritt zu beschaffen. Bei Ablehnung keine
                Erstattung. Nicht konforme Dokumente = weitere Kosten oder
                Ablehnung.
              </Text>
            </Card.Content>
          </StyledCard>
          <SpacerDivider />
          <View>
            <Text variant="headlineSmall">Choose a country to apply on:</Text>
            <Spacer />
            <View style={styles.container}>
              <StyledDropdown
                selectPlaceholder="Select a Country"
                isFocus={isCountryDDLFocus}
                setIsFocus={setIsCountryDDLFocus}
                value={countryValue}
                setValue={setCountryValue}
                data={visaCountries}
              />
              {countryValue !== null && (
                <StyledDropdown
                  selectPlaceholder="Select Visa Type"
                  isFocus={isVisaTypeDDLFocus}
                  setIsFocus={setIsVisaTypeDDLFocus}
                  value={visaTypeValue}
                  setValue={setVisaTypeValue}
                  data={visaType}
                />
              )}
            </View>
            <Spacer />
            <StyledCard>
              <Card.Content>
                <Text style={{ marginTop: 8 }}>
                  By pressing Start, you agree to our secure storage of your
                  data in accordance with DVSG guidelines. Your information will
                  only be used for the intended purpose.
                </Text>
              </Card.Content>
            </StyledCard>
            <Spacer />
            <PrimaryButton
              disabled={countryValue === null || visaTypeValue === null}
              onPress={onCountrySelectedHandler}
            >
              <Text style={{ color: 'white' }}>Start</Text>
            </PrimaryButton>
          </View>
        </Layout>
      </ScrollView>
    </ModalSheet>
  );
};
