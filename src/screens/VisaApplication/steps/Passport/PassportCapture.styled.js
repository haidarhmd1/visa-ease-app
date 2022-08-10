import { SubHeadline } from 'components/general/Typography/Typography';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';

export const CameraWrapper = styled.View``;

export const StyledCamera = styled(Camera)`
  position: relative;
  height: 325px;
  margin-top: 25px;
  border-radius: 8px;
  overflow: hidden;
`;

export const CameraOverlay = styled.View`
  width: 80%;
  margin: auto;
  height: 80%;
  background-color: transparent;
  border-radius: 8px;
  border-width: 2px;
  border-color: white;
`;

export const InfoCameraTextWrapper = styled.View`
  position: absolute;
  bottom: 25px;
  width: 100%;
`;

export const StyledSubHeadline = styled(SubHeadline)`
  color: white;
  text-align: center;
`;
