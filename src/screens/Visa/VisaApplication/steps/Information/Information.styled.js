import styled from 'styled-components/native';

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
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 21px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const StyledWarningInformationCard = styled(StyledInformationCard)`
  border: 2px solid ${({ theme }) => theme.colors.warningBorder};
  background-color: ${({ theme }) => theme.colors.warningBackground};
  margin-top: 0;
`;

export const ImageTextWrapper = styled.View`
  position: absolute;
  bottom: 16px;
  left: 5%;
`;
