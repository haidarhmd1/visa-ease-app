import styled from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '50%')};
  box-shadow: 0px 2px 3.84px rgba(0, 0, 0, 0.25);
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 7px;
`;

export const TextWrapper = styled.View`
  padding: 8px 0px 8px 0px;
`;
