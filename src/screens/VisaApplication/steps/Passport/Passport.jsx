import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import {
  CameraOverlay,
  CameraWrapper,
  InfoCameraTextWrapper,
  StyledCamera,
  StyledSubHeadline,
} from './PassportCapture.styled';

const styles = StyleSheet.create({
  imageTaken: {
    width: 450,
    height: 450,
  },
});

export const Passport = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState({});
  const reference = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No Access to camera</Text>;

  const takePicture = async () => {
    setPhoto(await reference.current.takePictureAsync());
    console.log(photo);
  };

  return (
    <CameraWrapper>
      <StyledCamera type={Camera.Constants.Type.back} ref={reference}>
        <CameraOverlay style={styles.cameraOverlay} />
        <InfoCameraTextWrapper>
          <StyledSubHeadline onPress={takePicture}>
            Inorder to get the best result, caputre the ID/Passport inside of
            the frame
          </StyledSubHeadline>
        </InfoCameraTextWrapper>
      </StyledCamera>
      {/* <View style={styles.container}>
                <Image source={{ uri: photo.uri }} style={styles.imageTaken} />
            </View> */}
    </CameraWrapper>
  );
};
