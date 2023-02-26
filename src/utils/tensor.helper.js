import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';

import { Base64Binary } from './base64Image';

const BITMAP_DIMENSION = 224;

const modelJson = require('../tfModels/model.json');
const modelWeights = require('../tfModels/weights.bin');

// 0: channel from JPEG-encoded image
// 1: gray scale
// 3: RGB image
const TENSORFLOW_CHANNEL = 3;

// eslint-disable-next-line consistent-return
// export const getModel = async () => {
//   try {
//     // wait until tensorflow is ready
//     await tf.ready();
//     // load the trained model
//     return await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));
//   } catch (error) {
//     console.log('Could not load model', error);
//   }
// };

// eslint-disable-next-line consistent-return
export const getModel = async () => {
  try {
    await tf.ready();
    const model = await tf.loadLayersModel(
      bundleResourceIO(modelJson, modelWeights)
    );
    console.log('Model loaded!');
    return model;
  } catch (error) {
    console.log('Could not load model', error);
  }
};

// eslint-disable-next-line require-await, consistent-return
export const convertBase64ToTensor = async base64 => {
  try {
    const uIntArray = Base64Binary.decode(base64);
    // decode a JPEG-encoded image to a 3D Tensor of dtype
    const decodedImage = decodeJpeg(uIntArray, 3);
    // reshape Tensor into a 4D array
    return decodedImage.reshape([
      1,
      BITMAP_DIMENSION,
      BITMAP_DIMENSION,
      TENSORFLOW_CHANNEL,
    ]);
  } catch (error) {
    console.log('Could not convert base64 string to tesor', error);
  }
};

// eslint-disable-next-line consistent-return
export const startPrediction = async (model, tensor) => {
  try {
    // predict against the model
    const output = await model.predict(tensor);
    // return typed array
    return output.dataSync();
  } catch (error) {
    console.log('Error predicting from tensor image', error);
  }
};
