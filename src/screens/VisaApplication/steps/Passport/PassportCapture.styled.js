import {
  BodyText,
  SubHeadline,
  SubHeadlineBold,
} from 'components/general/Typography/Typography';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';

export const CameraWrapper = styled.View``;

export const StyledCamera = styled(Camera)`
  position: relative;
  height: 425px;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledSubHeadline = styled(SubHeadline)`
  color: white;
  text-align: center;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 425px;
  border-radius: 8px;
`;

export const ViewWrapper = styled.View`
  width: 100%;
  margin: auto;
`;

export const StyledInformationCard = styled.View`
  background-color: white;
  width: 100%;
  min-height: 100px;
  height: auto;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
`;

export const StyledWarningInformationCard = styled(StyledInformationCard)`
  background-color: #fffbe6;
`;

export const StyledSubHeadlineBold = styled(SubHeadlineBold)`
  margin-bottom: 12px;
`;

export const StyledBodyText = styled(BodyText)`
  margin-bottom: 8px;
`;

export const StyledCardItemWrapperText = styled.Text`
margin
`;
