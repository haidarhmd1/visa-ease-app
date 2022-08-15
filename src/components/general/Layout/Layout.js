import styled from 'styled-components/native';

export const Layout = styled.View`
  margin: 5%;
`;

export const Wrapper = styled.View`
  margin: 0 5%;
`;

export const CardWrapper = styled.View`
  background-color: ${({ theme }) => theme.color.primaryBackground};
  margin-top: ${({ theme }) => theme.marginTop};
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
