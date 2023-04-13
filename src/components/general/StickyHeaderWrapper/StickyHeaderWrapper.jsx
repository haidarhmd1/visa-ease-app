import React, { useRef } from 'react';

import Animated from 'react-native-reanimated';
import { FloatingCard } from 'components/FloatingCard';
import { StyleSheet, View } from 'react-native';
import { AppHeader } from '../AppHeader';

const BANNER_H = 350;

export const StickyHeaderWrapper = ({
  appBarTitle,
  navigation,
  floatingCardContent,
  children,
  imageSrc,
}) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <>
      <AppHeader
        goBack={() => navigation.goBack()}
        title={appBarTitle}
        navigation={navigation}
      />
      <Animated.ScrollView
        style={{
          backgroundColor: 'white',
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <View style={{ position: 'relative' }}>
          <View style={styles.bannerContainer}>
            <Animated.Image style={styles.banner(scrollA)} source={imageSrc} />
          </View>
          <FloatingCard>{floatingCardContent}</FloatingCard>
        </View>
        {children}
      </Animated.ScrollView>
    </>
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
