import React from 'react';
import { Layout } from 'components/general/Layout/Layout';
import { IconButton, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { SecondaryButton } from 'components/general/Buttons';
import { styles } from '../DocumentCapture.styled';
import { Camera } from 'expo-camera';

export const CaptureDocument = ({
  cameraReference,
  handleSnapPress,
  takePic,
}) => {
  return (
    <Layout style={style.container}>
      <Camera style={styles.camera} ref={cameraReference} flashMode="on" />
      <View style={styles.informationCardWarning}>
        <Text variant="labelLarge" style={style.textBold}>
          HINWEIS:
        </Text>
        <Text>
          Inorder to proceed with your application, the image needs to be clear
        </Text>
      </View>
      <View style={style.guideLineButtonContainer}>
        <SecondaryButton icon="animation" onPress={() => handleSnapPress(0)}>
          Guidelines
        </SecondaryButton>
      </View>
      <View style={style.buttonContainer}>
        <View style={[style.cameraButtonWrapper, styles.cameraWrapper]}>
          <IconButton
            mode="contained"
            icon="plus"
            containerColor="#00bf80"
            iconColor="white"
            size={48}
            onPress={takePic}
          />
        </View>
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBold: {
    fontWeight: 'bold',
  },
  guideLineButtonContainer: { marginTop: 8, alignSelf: 'center' },
  buttonContainer: {
    position: 'absolute',
    bottom: 8,
    width: 320,
    alignSelf: 'center',
  },
  cameraButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
