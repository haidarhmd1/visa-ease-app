import React from 'react';
import { FloatingCard } from 'components/FloatingCard';
import { Animated, StyleSheet, View } from 'react-native';
import { BANNER_H } from 'res/constants/environment';

export const StickyHeaderWrapperImageContent = ({
  scrollA,
  imageSrc,
  floatingCardContent,
}) => {
  return (
    <View
      style={{
        position: 'relative',
      }}
    >
      <View style={styles.bannerContainer}>
        <Animated.Image style={styles.banner(scrollA)} source={imageSrc} />
      </View>
      <FloatingCard>{floatingCardContent}</FloatingCard>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 900,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
});
