import styled from 'styled-components/native';
import { BodyText, SubHeadlineBold } from '../Typography/Typography';

export const CardItemWrapper = styled.View`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

export const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
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
