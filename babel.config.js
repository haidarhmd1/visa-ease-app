module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin',
      // {
      //   globals: ['__xyz'],
      // },
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            test: './test',
            underscore: 'lodash',
          },
        },
      ],
    ],
  };
};
