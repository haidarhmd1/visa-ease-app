import styled from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '50%')};
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border: 2px solid #00bf80;
  border-radius: 7px;
  padding: 8px;
  margin-bottom: 16px;
`;

export const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 7px;
`;

export const TextWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 12px;
`;
