import React, { useRef } from 'react';

import { View, Animated } from 'react-native';
import { StickyHeaderWrapperImageContent } from './StickyHeaderWrapperImageContent';
import { StickyAppHeader } from '../AppHeader/StickyAppHeader';

export const StickyHeaderWrapper = ({
  appBarTitle,
  navigation,
  floatingCardContent,
  children,
  imageSrc,
}) => {
  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <StickyAppHeader
        scrollA={scrollA}
        goBack={() => navigation.goBack()}
        title={appBarTitle}
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
        <StickyHeaderWrapperImageContent
          scrollA={scrollA}
          floatingCardContent={floatingCardContent}
          imageSrc={imageSrc}
        />
        {children}
      </Animated.ScrollView>
    </View>
  );
};
