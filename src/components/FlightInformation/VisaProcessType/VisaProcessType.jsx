import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { colorPalette } from 'styles/theme/theme.extended';

export const VisaProcessType = ({ setClickedId, index, clickedId, item }) => {
  return (
    <TouchableOpacity
      onPress={() => setClickedId(index)}
      style={[
        index === clickedId ? styles.buttonActive : styles.button,
        index === 1 ? styles.buttonBorderRight : styles.buttonBorderLeft,
      ]}
    >
      <Avatar.Icon
        icon={item.icon}
        size={24}
        style={{
          backgroundColor: clickedId
            ? colorPalette.binary.white
            : colorPalette.turquoise.tstandard,
        }}
      />
      <Text
        variant="labelLarge"
        style={[index === clickedId ? styles.textActive : styles.text]}
      >
        {item.title}
      </Text>
      <Text
        style={[index === clickedId ? styles.textActive : styles.text]}
        variant="labelSmall"
      >
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  buttonBorderLeft: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  buttonBorderRight: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  button: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: colorPalette.turquoise.tstandard,
  },
  buttonActive: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: colorPalette.turquoise.tstandard,
    borderColor: colorPalette.turquoise.tstandard,
  },
  text: {
    color: colorPalette.turquoise.tstandard,
  },
  textActive: {
    color: colorPalette.binary.white,
  },
});
