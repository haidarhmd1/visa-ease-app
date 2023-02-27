import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View, StyleSheet } from 'react-native';

import { Layout } from 'components/general/Layout/Layout';
import { Camera } from 'expo-camera';
import { Text } from 'react-native-paper';
import { AppHeader } from 'components/general/AppHeader';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import { PrimaryButton } from 'components/general/Buttons';
import { SaveDocument } from './SaveDocument';
import { CaptureDocument } from './CaptureDocument';

export const DocumentCapture = ({ next, fieldValue }) => {
  const sheetReference = useRef(null);
  const snapPoints = useMemo(() => ['75%'], []);

  const handleSnapPress = useCallback(index => {
    sheetReference.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetReference.current?.close();
  }, []);

  const navigation = useNavigation();
  const cameraReference = useRef(null);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text variant="labelLarge">Requesting permissions...</Text>;
  }
  if (!hasCameraPermission) {
    return (
      <Text variant="labelLarge">
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  const takePic = async () => {
    const options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    const newPhoto = await cameraReference.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    return (
      <>
        <AppHeader
          navigation={navigation}
          goBack={() => navigation.goBack()}
          title="Save Document"
        />
        <SaveDocument
          photo={photo}
          setPhoto={setPhoto}
          submit={next}
          fieldValue={fieldValue}
        />
      </>
    );
  }

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Document"
      />
      <CaptureDocument
        cameraReference={cameraReference}
        handleSnapPress={handleSnapPress}
        takePic={takePic}
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
