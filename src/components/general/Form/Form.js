import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput.attrs({
  placeholderTextColor: '#a9a9a9',
})`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.marginTop};
  width: 100%;
  height: 44px;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.formControls};

  /* System Background/Light/Primary */
  background: ${({ theme }) => theme.colors.primaryBackground};
`;

export const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.tertiaryText};
  color: ${({ theme }) => theme.colors.errorFont};
`;

export const StyledTextInputMask = styled(TextInputMask).attrs({
  placeholderTextColor: '#a9a9a9',
})`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding: 0px 0px 0px 16px; */
  margin-top: ${({ theme }) => theme.marginTop};
  font-size: ${({ theme }) => theme.fontSize.formControls};
  margin: 0;
  width: 100%;
  height: 44px;

  /* System Background/Light/Primary */
  background: ${({ theme }) => theme.colors.primaryBackground};
`;
