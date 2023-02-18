import React from 'react';
import { Text, View } from 'react-native';
import { ActivityIndicator, IconButton } from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { styles } from './NotificationToast.styled';

const ToastType = {
  Top: 'Top',
  Bottom: 'Bottom',
};

export const NotificationToast = ({
  showToast,
  type,
  isLoading,
  error,
  success,
}) => {
  const positionY = useSharedValue(type === ToastType.Top ? -100 : 100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(positionY.value) }],
    };
  });

  if (showToast) {
    if (type === ToastType.Top) {
      positionY.value = 0;
    }
    if (type === ToastType.Bottom) {
      positionY.value = -16;
    }
  }

  if (!showToast) {
    if (type === ToastType.Top) {
      positionY.value = -100;
    }
    if (type === ToastType.Bottom) {
      positionY.value = 100;
    }
  }

  return (
    <Animated.View
      style={[
        styles.commonToastStyle,
        type === ToastType.Top ? styles.topToastStyle : styles.bottomToastStyle,
        animatedStyle,
      ]}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {isLoading && (
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
    </Animated.View>
  );
};