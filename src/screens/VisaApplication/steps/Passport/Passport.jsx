import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import {
  CameraWrapper,
  StyledBodyText,
  StyledCamera,
  StyledImage,
  StyledInformationCard,
  StyledSubHeadlineBold,
  StyledWarningInformationCard,
  ViewWrapper,
} from './PassportCapture.styled';

export const Passport = () => {
  const cameraReference = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  }
  if (!hasCameraPermission) {
    return (
      <Text>
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
    const savePhoto = () => {
      // eslint-disable-next-line promise/catch-or-return
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto();
      });
    };

    return (
      <ViewWrapper>
        <StyledImage source={photo} />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Discard" onPress={() => setPhoto()} />
      </ViewWrapper>
    );
  }

  return (
    <CameraWrapper>
      <StyledCamera ref={cameraReference} flashMode="on" />
      <View>
        <Button title="Take Pic" onPress={takePic} />
        <StyledWarningInformationCard>
          <StyledSubHeadlineBold>HINWEIS:</StyledSubHeadlineBold>
          <StyledBodyText>
            Inorder to proceed with your application, the image needs to be
            clear
          </StyledBodyText>
        </StyledWarningInformationCard>
      </View>
    </CameraWrapper>
  );
};
