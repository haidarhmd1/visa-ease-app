import React from 'react';
import { Layout } from 'components/general/Layout/Layout';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import {
  StyledCameraButtonWrapper,
  StyledImage,
} from '../DocumentCapture.styled';

export const SaveDocument = ({ photo, setPhoto, submitDocument }) => {
  return (
    <Layout style={style.container}>
      <>
        <StyledImage source={photo} />

        <View style={style.content}>
          <StyledCameraButtonWrapper style={style.buttonWrapper}>
            <View>
              <IconButton
                icon="restore"
                containerColor="white"
                iconColor="black"
                size={24}
                onPress={() => setPhoto()}
              />
              <Text variant="labelSmall" style={style.textCenter}>
                retake
              </Text>
            </View>
            <View>
              <IconButton
                icon="arrow-right-thin"
                containerColor="white"
                iconColor="black"
                size={24}
                onPress={submitDocument}
              />
              <Text variant="labelSmall">Continue</Text>
            </View>
          </StyledCameraButtonWrapper>
        </View>
      </>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    position: 'absolute',
    bottom: 24,
    width: 320,
    alignSelf: 'center',
  },
  buttonWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textCenter: {
    textAlign: 'center',
  },
});
