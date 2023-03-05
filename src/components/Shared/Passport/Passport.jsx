import React, { useCallback, useMemo, useRef, useState } from 'react';
import { DocumentCapture } from 'components/DocumentCapture';
import BottomSheet from '@gorhom/bottom-sheet';
import { PrimaryButton } from 'components/general/Buttons';
import { View, StyleSheet, Image, ScrollView } from 'react-native';

import { Layout, Spacer } from 'components/general/Layout/Layout';
import { Divider, Text } from 'react-native-paper';
import { PassportImage } from 'assets/illustrations';

const blurhash = '00Q12z';

export const Passport = () => {
  const [photo, setPhoto] = useState();
  const sheetReference = useRef(null);

  const snapPoints = useMemo(() => ['75%'], []);

  const handleClosePress = useCallback(() => {
    sheetReference.current?.close();
  }, []);

  const submitDocument = () => {
    console.log('photo', photo.uri);
  };

  return (
    <>
      <DocumentCapture
        photo={photo}
        setPhoto={setPhoto}
        submitDocument={submitDocument}
        title="Passport Image"
      />
      <BottomSheet
        style={[style.shadow, style.sheetContainer]}
        ref={sheetReference}
        snapPoints={snapPoints}
        bottomInset={46}
        detached
      >
        <Layout style={style.container}>
          <View style={style.container}>
            <Text variant="headlineMedium" style={style.centerText}>
              Passport Guidelines
            </Text>
            <Spacer />
            <Divider />
            <Spacer />
            <ScrollView>
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={PassportImage}
                  style={style.image}
                  placeholder={blurhash}
                  contentFit="contain"
                  transition={1000}
                />
              </View>
              <Spacer />
              <Text variant="bodyMedium" style={style.centerText}>
                When taking a picture of your passport for a application, it is
                important to ensure that the picture is clear and focused. This
                will ensure that the application is processed correctly and
                without any delays. Be sure to double-check the image before
                submitting it to ensure that it meets the necessary
                requirements.
              </Text>
              <Spacer />
            </ScrollView>
          </View>
          <View>
            <PrimaryButton onPress={handleClosePress}>Got it!</PrimaryButton>
          </View>
        </Layout>
      </BottomSheet>
    </>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  sheetContainer: {
    marginHorizontal: 24,
  },
  container: {
    flex: 1,
  },
  centerText: {
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    backgroundColor: '#fff',
  },
});
