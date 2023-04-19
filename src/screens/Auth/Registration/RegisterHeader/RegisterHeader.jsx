import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Image } from 'expo-image';
import { PlaneStartingIllustration } from 'assets/illustrations';
import { Spacer } from 'components/general/Layout/Layout';
import React from 'react';

const blurhash = '00Q12z';
export const RegisterHeader = () => {
  return (
    <View>
      <Text
        variant="bodyLarge"
        style={{ fontWeight: 'bold', textAlign: 'center' }}
      >
        Register for Visastar
      </Text>
      <View style={{ alignSelf: 'center' }}>
        <Image
          style={style.image}
          source={PlaneStartingIllustration}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}>
        This will only take a couple of minutes
      </Text>
      <Spacer />
      <Text variant="bodyMedium">
        Entspannen Sie sich und freuen Sie sich auf Ihren Urlaub, Ihre
        Kreuzfahrt oder Ihre Geschäftsreise, um das Visum kümmern wir uns.
      </Text>
      <Spacer />
    </View>
  );
};
const style = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    backgroundColor: '#fff',
  },
});
