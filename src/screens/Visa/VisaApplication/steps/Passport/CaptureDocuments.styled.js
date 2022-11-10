import {
  BodyText,
  SubHeadline,
  SubHeadlineBold,
} from 'components/general/Typography/Typography';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const CameraWrapper = styled.View``;

export const StyledCamera = styled(Camera)`
  position: relative;
  height: 425px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

export const StyledSubHeadline = styled(SubHeadline)`
  color: white;
  text-align: center;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 425px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ViewWrapper = styled.View`
  width: 100%;
  margin: auto;
`;

export const StyledInformationCard = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  width: 100%;
  min-height: 100px;
  height: auto;
  margin-top: ${({ theme }) => theme.marginTop};
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const StyledWarningInformationCard = styled(StyledInformationCard)`
  background-color: ${({ theme }) => theme.colors.warningBackground};
  border: 2px solid ${({ theme }) => theme.colors.warningBorder};
`;

export const StyledSubHeadlineBold = styled(SubHeadlineBold)`
  margin-bottom: ${({ theme }) => theme.marginBottom};
`;

export const StyledBodyText = styled(BodyText)`
  margin-bottom: ${({ theme }) => theme.marginBottom};
`;

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  width: 75px;
  border-color: ${({ theme }) => theme.colors.primaryBrand};
  border-width: 2px;
  border-radius: ${({ theme }) => theme.circleRadius};
  background-color: ${({ theme }) => theme.colors.primaryBrand};
  padding: 12px;
  align-items: center;
`;

export const StyledCameraButtonWrapper = styled.View`
  width: 100%;
  margin-top: ${({ theme }) => theme.marginTop};
  align-items: center;
`;
