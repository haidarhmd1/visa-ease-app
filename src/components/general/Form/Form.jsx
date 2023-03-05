import React from 'react';
import { TextInput } from 'react-native-paper';

export const StyledTextInput = ({ children, style, ...properties }) => {
  return (
    <TextInput
      {...properties}
      mode="outlined"
      outlineColor="#00bf80"
      activeOutlineColor="#00bf80"
      style={style}
      outlineStyle={{ borderRadius: 14, borderWidth: 1 }}
    >
      {children}
    </TextInput>
  );
};
