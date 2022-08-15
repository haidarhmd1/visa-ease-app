import styled from 'styled-components/native';

export const TextWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.marginBottom};
`;

export const StyledSignaturePreview = styled.Image`
  align-self: center;
  width: 150;
  height: 150;
  border: 1px solid ${({ theme }) => theme.colors.errorFont};
  margin-top: ${({ theme }) => theme.marginTop};
`;
