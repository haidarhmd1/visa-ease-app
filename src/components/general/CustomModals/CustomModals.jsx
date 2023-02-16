import * as React from 'react';
import { View } from 'react-native';
import {
  ActivityIndicator,
  IconButton,
  Modal,
  Portal,
  Text,
} from 'react-native-paper';

export const ModalPopUp = ({ visible, children }) => {
  const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20 };

  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={false}
        contentContainerStyle={containerStyle}
      >
        {children}
      </Modal>
    </Portal>
  );
};

export const RModal = ({ visible, loading, success, error, dismissable }) => {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={false}
        contentContainerStyle={containerStyle}
      >
        {loading && (
          <View>
            <ActivityIndicator animating size="large" color="green" />
            <Text
              allowFontScaling
              style={{ textAlign: 'center', marginTop: 16 }}
            >
              Loading...
            </Text>
          </View>
        )}
        {success && (
          <View style={{ alignSelf: 'center' }}>
            <IconButton
              size={64}
              iconColor="green"
              icon="check-circle-outline"
            />
            <Text variant="headlineMedium">Success</Text>
          </View>
        )}
        {error && (
          <View style={{ alignSelf: 'center' }}>
            <IconButton iconColor="red" icon="alert-circle-outline" size={64} />
            <Text variant="headlineMedium" style={{ textAlign: 'center' }}>
              Error
            </Text>
          </View>
        )}
      </Modal>
    </Portal>
  );
};

export const SuccessModal = ({ visible }) => {
  const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20 };

  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={false}
        contentContainerStyle={containerStyle}
      >
        <Button mode="contained" icon="mdiCheckCircleOutline" />
      </Modal>
    </Portal>
  );
};

export const ErrorModal = ({ visible }) => {
  const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20 };

  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={false}
        contentContainerStyle={containerStyle}
      >
        <Button icon="mdiAlertCircleOutline" />
      </Modal>
    </Portal>
  );
};

export const LoadingModal = ({ visible }) => {
  const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20 };

  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={false}
        contentContainerStyle={containerStyle}
      >
        <ActivityIndicator animating size="large" color="green" />
        <Text allowFontScaling style={{ textAlign: 'center', marginTop: 16 }}>
          Loading...
        </Text>
      </Modal>
    </Portal>
  );
};
