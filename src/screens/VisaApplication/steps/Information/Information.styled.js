import styled from 'styled-components/native';
import {
  BodyText,
  SubHeadlineBold,
} from 'components/general/Typography/Typography';

export const CardItemWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  width: 100%;
  height: 250px;
  position: relative;
`;

export const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 250px;
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
  border: 2px solid ${({ theme }) => theme.colors.warningBorder};
  background-color: ${({ theme }) => theme.colors.warningBackground};
`;

export const StyledSubHeadlineBold = styled(SubHeadlineBold)`
  margin-bottom: ${({ theme }) => theme.marginBottom};
`;

export const ImageBackgroundText = styled(StyledSubHeadlineBold)`
  font-size: ${({ theme }) => theme.fontSize.largeTitle};
  color: ${({ theme }) => theme.colors.secondaryFont};
  padding: 0 5%;
`;

export const StyledBodyText = styled(BodyText)`
  margin-bottom: ${({ theme }) => theme.marginBottom};
`;

export const ImageTextWrapper = styled.View`
  position: absolute;
  bottom: 0;
`;
