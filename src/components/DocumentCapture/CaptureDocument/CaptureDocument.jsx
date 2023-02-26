import React, { useState, useEffect } from 'react';
import { Layout } from 'components/general/Layout/Layout';
import { IconButton, Text } from 'react-native-paper';
import { View, StyleSheet, Platform } from 'react-native';
import { SecondaryButton } from 'components/general/Buttons';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

import { cameraWithTensors } from '@tensorflow/tfjs-react-native';

import { Camera } from 'expo-camera';
// import { getModel, startPrediction } from '../../../utils/tensor.helper';

import { model } from '@tensorflow/tfjs';
import {
  StyledCameraButtonWrapper,
  StyledWarningInformationCard,
} from '../DocumentCapture.styled';

const TensorCamera = cameraWithTensors(Camera);
// const RESULT_MAPPING = ['rectangle'];
// const axis = 0;
const textureDims =
  Platform.OS === 'ios'
    ? {
        height: 1920,
        width: 1080,
      }
    : {
        height: 1200,
        width: 1600,
      };

export const CaptureDocument = ({ handleSnapPress, cameraReference }) => {
  const [model, setModel] = useState();
  const requestAnimationFrameId = 0;

  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestAnimationFrameId);
    };
  }, [requestAnimationFrameId]);

  useEffect(() => {
    (async () => {
      await tf.ready();
      setModel(await cocoSsd.load());
    })();
  }, []);

  const handleCameraStream = images => {
    const loop = async () => {
      const nextImageTensor = images.next().value;
      if (!model || !nextImageTensor) throw new Error('no image available');
      try {
        const tModel = await model.detect(nextImageTensor);
        console.log('tModel', tModel);
      } catch (error) {
        console.log(error);
      }
      requestAnimationFrame(loop);
    };

    loop();
  };

  // const drawRectangle = (prediction, nextImageTensor) => {
  //   console.log('prediction', prediction);
  // };

  return (
    <Layout style={style.container}>
      {/* Camera Element */}
      <TensorCamera
        // ref={cameraReference}
        style={{
          position: 'relative',
          width: 320,
          height: 440,
          borderRadius: 18,
          alignSelf: 'center',
        }}
        type={Camera.Constants.Type.back}
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeHeight={224}
        resizeWidth={224}
        resizeDepth={3}
        onReady={images => handleCameraStream(images)}
        autorender
        flashMode={Camera.Constants.FlashMode.off}
      />
      {/* end Camera Element */}

      <StyledWarningInformationCard>
        <Text variant="labelLarge" style={style.textBold}>
          HINWEIS:
        </Text>
        <Text>
          Inorder to proceed with your application, the image needs to be clear
        </Text>
      </StyledWarningInformationCard>
      <View style={style.guideLineButtonContainer}>
        <SecondaryButton icon="animation" onPress={() => handleSnapPress(0)}>
          Guidelines
        </SecondaryButton>
      </View>
      <View style={style.buttonContainer}>
        <StyledCameraButtonWrapper style={style.cameraButtonWrapper}>
          <IconButton
            mode="contained"
            icon="plus"
            containerColor="#00bf80"
            iconColor="white"
            size={48}
            // onPress={handleImageCapture}
            onPress={() => {}}
          />
        </StyledCameraButtonWrapper>
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
