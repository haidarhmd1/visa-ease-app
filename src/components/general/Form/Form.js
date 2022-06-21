import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components';

export const StyledTextInput = styled.TextInput`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 16px;
  margin-top: 8px;
  /* margin-bottom: 8px; */
  width: 100%;
  height: 44px;
  /* System Background/Light/Primary */
  background: #ffffff;
`;

export const ErrorText = styled.Text`
  font-size: 14px;
  color: red;
  padding-left: 8px;
`;

export const StyledTextInputMask = styled(TextInputMask)`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 16px;
  margin-top: 8px;
  /* margin-bottom: 8px; */
  width: 100%;
  height: 44px;
  /* System Background/Light/Primary */
  background: #ffffff;
`;
