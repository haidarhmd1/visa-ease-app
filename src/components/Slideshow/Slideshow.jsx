import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, Dimensions, View } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

const blurhash =
  ';8D_gwXnD,$NROJ:M_$*OFJba%I:ngj]XTskjFXTIVt5ocRQn%ozWXjXkCktRPemtla_aJbwR-nNI[s+wuN|Wpr;X9bvr;ksWBnObvW;nNkCX9nhRjofoLWAofoLWAbboet8WEWXoIa#W=n~aeW=';

export const Slideshow = ({ dataSource }) => {
  const { width } = Dimensions.get('window');
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Carousel
        loop
        width={width}
        height={width / 2}
        mode="parallax"
        autoPlay
        snapEnabled
        data={dataSource}
        autoPlayInterval={5000}
        scrollAnimationDuration={250}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ index }) => {
          return (
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={dataSource[index].url}
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
              />
              <View style={styles.overlay} />
              <Text style={styles.text}>{dataSource[index].title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 32,
    left: 32,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.4,
  },
});
