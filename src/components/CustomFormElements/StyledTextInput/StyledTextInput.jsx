import React from 'react';
import { TextInput } from 'react-native-paper';
import { MyTheme } from 'styles/theme/theme.extended';

export const StyledTextInput = ({
  children,
  style,
  outlineColor,
  ...properties
}) => {
  return (
    <TextInput
      {...properties}
      mode="outlined"
      outlineColor={outlineColor}
      activeOutlineColor={outlineColor}
      style={style}
      outlineStyle={{ borderRadius: MyTheme.borderRadius, borderWidth: 1 }}
    />
  );
};
