import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import React from 'react';

export const VisaFloatingCardContent = () => {
  return (
    <View style={{ marginTop: 14 }}>
      <Card.Content>
        <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
          Visum für Dubai Emirate, Indien, Japan, China, u.v.m. günstig und
          schnell
        </Text>
        <Text>
          Sie benötigen ein Visum für Ihre Reise? Wir bieten einen Visaservice
          an allen Botschaften in Berlin an. Wir ermöglichen auch ein
          Express-Visum! In den meisten Fällen sogar innerhalb von 24 Stunden.
        </Text>
      </Card.Content>
    </View>
  );
};
