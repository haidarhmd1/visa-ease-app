import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, IconButton, Text } from 'react-native-paper';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useRef, useMemo, useEffect } from 'react';
import { Layout } from '../Layout/Layout';

const NotificationModalRaw = ({ visible, loading, success, error }) => {
  const bottomSheetModalReference = useRef(null);

  const snapPoints = useMemo(() => ['20%'], []);

  useEffect(() => {
    if (!visible) {
      setTimeout(() => {
        bottomSheetModalReference.current?.close();
      }, 1500);
      return;
    }
    bottomSheetModalReference.current?.present();
  }, [visible]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        style={[style.shadow, style.sheetContainer]}
        handleStyle={{ display: 'none' }}
        ref={bottomSheetModalReference}
        snapPoints={snapPoints}
        enableDismissOnClose
        animateOnMount={false}
        bottomInset={46}
        detached
      >
        <Layout style={style.container}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {loading && (
              <View>
                <ActivityIndicator animating size="large" color="green" />

                <Text variant="headlineSmall" style={{ textAlign: 'center' }}>
                  Loading...
                </Text>
              </View>
            )}
            {success && (
              <View>
                <IconButton
                  size={64}
                  iconColor="green"
                  icon="check-circle-outline"
                  style={{ alignSelf: 'center' }}
                />
                <Text variant="headlineSmall" style={{ textAlign: 'center' }}>
                  Success
                </Text>
              </View>
            )}
            {error && (
              <View>
                <IconButton
                  iconColor="red"
                  icon="alert-circle-outline"
                  size={64}
                  style={{ alignSelf: 'center' }}
                />
                <Text variant="headlineSmall" style={{ textAlign: 'center' }}>
                  Error
                </Text>
              </View>
            )}
          </View>
        </Layout>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  sheetContainer: {
    marginHorizontal: 24,
  },
  container: {
    flex: 1,
  },
});

export const NotificationModal = React.memo(NotificationModalRaw);
