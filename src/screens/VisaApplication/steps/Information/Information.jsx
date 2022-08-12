import React from 'react';
import { Button, ImageBackground, Text, View } from 'react-native';

import { EmiratesCardImage } from 'assets/images';
import { Layout } from 'components/general/Layout/Layout';
import {
  BodyText,
  SubHeadlineBold,
} from '../../../../components/general/Typography/Typography';
import {
  CardItemWrapper,
  ImageBackgroundText,
  ImageTextWrapper,
  StyledBodyText,
  StyledImageBackground,
  StyledInformationCard,
  StyledSubHeadlineBold,
  StyledWarningInformationCard,
} from './Information.styled';

export const Information = ({ next, data }) => {
  return (
    <>
      <StyledImageBackground source={EmiratesCardImage}>
        <ImageTextWrapper>
          <ImageBackgroundText style={{ padding: 16 }}>
            Visum for UAE
          </ImageBackgroundText>
        </ImageTextWrapper>
      </StyledImageBackground>
      <Layout>
        <StyledWarningInformationCard>
          <StyledSubHeadlineBold>HINWEIS:</StyledSubHeadlineBold>
          <StyledBodyText>
            Die Bearbeitungszeiten bei den Behörden/ Konsulaten können
            naturgemäß nicht garantiert werden, jedoch stehen wir in engem
            Kontakt und setzen alles daran Ihr Visum rechtzeitig vor
            Reiseantritt zur Verfügung stellen zu können. Die Gebühren können
            bei Ablehnung nicht erstattet werden. Sollten Ihre Dokumente nicht
            den Vorgaben entsprechen, können weitere Kosten zur weiteren
            Bearbeitung anfallen/ oder die Bearbeitung des Visaantrages kann
            nicht fortgeführt werden.{' '}
          </StyledBodyText>
        </StyledWarningInformationCard>

        <StyledInformationCard>
          <StyledSubHeadlineBold>Informationen:</StyledSubHeadlineBold>
          <StyledBodyText>- Gültigkeit des Visa 2 Monate</StyledBodyText>
          <StyledBodyText>- 14 Tage einfache Einreise</StyledBodyText>
          <StyledBodyText>
            - 30 Tage einfache und mehrfache Einreise (z.B. bei einer Kreuzfahrt
            notwendig)
          </StyledBodyText>
          <StyledBodyText>
            - 90 Tage mehrfache Einreise (z.B. bei einer Kreuzfahrt notwendig)
          </StyledBodyText>
        </StyledInformationCard>

        <StyledInformationCard>
          <StyledSubHeadlineBold>Wir benötigen:</StyledSubHeadlineBold>
          <StyledBodyText>
            - wir benötigen eine Farbkopie Ihres Reisepasses in guter Qualität
            (Reisepass muss mindestens 6 Monate gültig bei Rückreise sein)
          </StyledBodyText>
          <StyledBodyText>- Kopie Aufenthaltserlaubnis</StyledBodyText>
          <StyledBodyText>- Passbild (biometrisch)</StyledBodyText>
          <StyledBodyText>- ausgefülltes Formular</StyledBodyText>
        </StyledInformationCard>

        <StyledInformationCard>
          <StyledSubHeadlineBold>
            Bearbeitung bei uns im Haus:
          </StyledSubHeadlineBold>
          <Button
            onPress={() => next({ visaType: 'express' })}
            title="Express"
          />
          <Button
            onPress={() => next({ visaType: 'standard' })}
            title="Standard"
          />
        </StyledInformationCard>
      </Layout>
    </>
  );
};