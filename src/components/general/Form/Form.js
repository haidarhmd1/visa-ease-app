import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput.attrs({
  placeholderTextColor: '#A3A3A3',
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
  border: 1px solid
    ${({ isError }) =>
      isError ? ({ theme }) => theme.colors.error : '#e5e5e5'};
  border-radius: ${({ theme }) => theme.borderFormRadius};
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 4px;

  /* System Background/Light/Primary */
  background: ${({ theme }) => theme.colors.primaryBackground};
`;

export const FormItemWrapper = styled.View`
  margin-bottom: 16px;
`;

export const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.tertiaryText};
  color: ${({ theme }) => theme.colors.error};
`;

export const StyledTextInputMask = styled(TextInputMask).attrs({
  placeholderTextColor: '#A3A3A3',
})`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.marginTop};
  font-size: ${({ theme }) => theme.fontSize.formControls};
  border: 1px solid
    ${({ isError }) =>
      isError ? ({ theme }) => theme.colors.error : '#e5e5e5'};
  border-radius: ${({ theme }) => theme.borderFormRadius};
  padding: 8px;
  margin: 0;
  width: 100%;
  height: 44px;
  margin-top: 8px;
  margin-bottom: 4px;

  /* System Background/Light/Primary */
  background: ${({ theme }) => theme.colors.primaryBackground};
`;
