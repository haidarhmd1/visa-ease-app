import React, { useEffect, useState } from 'react';

import { Appbar } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { BANNER_H, TOPNAVI_H } from 'res/constants/environment';
import { useSafeArea } from 'react-native-safe-area-context';

export const StickyAppHeader = ({ goBack = () => {}, title, scrollA }) => {
  const safeArea = useSafeArea();

  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);
  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener(a => {
      const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top;
      if (isTransparent && a.value > topNaviOffset) {
        setTransparent(false);
      } else if (!isTransparent && a.value < topNaviOffset) {
        setTransparent(true);
      }
    });
    // eslint-disable-next-line consistent-return
    return () => scrollA.removeListener(listenerId);
  });

  return (
    <Appbar.Header
      style={{
        backgroundColor: isTransparent ? 'transparent' : '#FFF',
        marginBottom: isFloating ? -TOPNAVI_H - safeArea.top : 0,
        position: 'absolute',
        top: 0,
        height: TOPNAVI_H + safeArea.top,
        width: Dimensions.get('window').width,
        zIndex: 1,
        shadowOpacity: isTransparent ? 0 : 0.5,
        elevation: isTransparent ? 0.01 : 5,
      }}
    >
      <Appbar.Action
        icon="arrow-left"
        onPress={goBack}
        style={{ backgroundColor: 'white' }}
      />
      <Appbar.Content
        title={title}
        color="white"
        titleStyle={{
          color: isTransparent ? '#FFF' : '#000',
        }}
      />
    </Appbar.Header>
  );
};
