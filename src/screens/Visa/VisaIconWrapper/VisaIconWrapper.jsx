import React from 'react';
import { View } from 'react-native';
import { IconView } from 'components/IconView';

export const VisaIconWrapper = () => {
  return (
    <View
      style={{
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <IconView icon="passport" size={48} title="Reisepass" />
      <IconView icon="airplane-marker" size={48} title="Aufenthaltserlaubnis" />
      <IconView
        icon="file-document-edit-outline"
        size={48}
        title="Foto (biometrisch)"
      />
      <IconView icon="send-check" size={48} title="Health Insurance" />
    </View>
  );
};
