import React from 'react';
import { Button } from 'react-native-paper';
import { MyTheme } from 'styles/theme/theme.extended';

export const PrimaryButton = ({ children, style, ...properties }) => {
  return (
    <Button
      testID="primary-button"
      mode="contained"
      buttonColor={MyTheme.colors.primaryBrand}
      {...properties}
      style={[style, { borderRadius: MyTheme.borderRadius }]}
    >
      {children}
    </Button>
  );
};

export const SecondaryButton = ({ children, style, ...properties }) => {
  return (
    <Button
      testID="secondary-button"
      mode="contained"
      buttonColor="white"
      textColor={MyTheme.colors.primaryBrand}
      {...properties}
      style={[
        style,
        {
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: MyTheme.colors.primaryBrand,
          borderRadius: MyTheme.borderRadius,
        },
      ]}
    >
      {children}
    </Button>
  );
};

export const DangerButton = ({ children, style, ...properties }) => {
  return (
    <Button
      testID="danger-button"
      mode="contained"
      buttonColor="#ff0000"
      textColor="white"
      {...properties}
      style={[style, { borderRadius: MyTheme.borderRadius }]}
    >
      {children}
    </Button>
  );
};
