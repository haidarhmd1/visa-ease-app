import React, { useRef } from 'react';

import Animated from 'react-native-reanimated';
import { AppHeader } from '../AppHeader';
import { StickyHeaderWrapperImageContent } from './StickyHeaderWrapperImageContent';

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
        // eslint-disable-next-line jsx-a11y/aria-role
        role="secondary"
        goBack={() => navigation.goBack()}
        title={appBarTitle}
        scrollA={scrollA}
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
        <StickyHeaderWrapperImageContent
          scrollA={scrollA}
          floatingCardContent={floatingCardContent}
          imageSrc={imageSrc}
        />
        {children}
      </Animated.ScrollView>
    </>
  );
};
