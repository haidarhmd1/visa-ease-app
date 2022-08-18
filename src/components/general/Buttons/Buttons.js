import styled from 'styled-components/native';
import Button from 'react-native-button';

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primaryButtonBackground};
  color: ${({ theme }) => theme.colors.primaryButtonFont};
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.borderFormRadius};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.Buttons};
  height: 48px;
  overflow: hidden;
`;

export const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondaryButtonBackground};
  border: 2px solid ${({ theme }) => theme.colors.ButtonBorder};
  color: ${({ theme }) => theme.colors.secondaryButtonFont};
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.borderFormRadius};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.Buttons};
  height: 48px;
  overflow: hidden;
`;
