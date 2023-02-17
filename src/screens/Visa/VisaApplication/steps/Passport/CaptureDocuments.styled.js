import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const CameraWrapper = styled.View``;

export const StyledCamera = styled(Camera)`
  position: relative;
  width: 320px;
  height: 440px;
  border-radius: 18px;
  align-self: center;
`;

export const StyledImage = styled.Image`
  width: 320px;
  height: 440px;
  border-radius: 18px;
  align-self: center;
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
`;
