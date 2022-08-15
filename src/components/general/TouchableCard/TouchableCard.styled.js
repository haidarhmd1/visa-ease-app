import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { BodyText, TitleBold } from '../Typography/Typography';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '50%')};
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primaryBrandBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 8px;
  margin-bottom: ${({ theme }) => theme.marginBottom};
`;

export const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const TextWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 12px;
`;

export const StyledTitleBold = styled(TitleBold)`
  color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const StyledBodyText = styled(BodyText)`
  color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const StyledRightCircle = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.secondaryFont};
  align-self: center;
`;
