import React, { useCallback, useMemo, useRef, useState } from 'react';
import { DocumentCapture } from 'components/DocumentCapture';
import BottomSheet from '@gorhom/bottom-sheet';
import { PrimaryButton } from 'components/general/Buttons';
import { View, StyleSheet } from 'react-native';

import { Layout } from 'components/general/Layout/Layout';
import { Modal, Portal, Text } from 'react-native-paper';

export const Passport = () => {
  const [photo, setPhoto] = useState();
  const sheetReference = useRef(null);

  const snapPoints = useMemo(() => ['75%'], []);

  const handleClosePress = useCallback(() => {
    sheetReference.current?.close();
  }, []);
  const handleSnapPress = useCallback(index => {
    sheetReference.current?.snapToIndex(index);
  }, []);

  const submitDocument = () => {
    console.log('photo', photo.uri);
  };

  return (
    <>
      <DocumentCapture
        photo={photo}
        setPhoto={setPhoto}
        title="passportImage"
        handleSnapPress={handleSnapPress}
        submitDocument={submitDocument}
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
            <Text>test</Text>
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
});
