import styled from 'styled-components/native';

export const FormInputWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  margin-top: ${({ theme }) => theme.marginTop};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const StyledSignatureView = styled.View`
  height: 400px;
  margin-top: ${({ theme }) => theme.marginTop};
`;
