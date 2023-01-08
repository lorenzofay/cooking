module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.ts', '.tsx'],
          root: ['./'],
          alias: {
            '@store': './store',
            '@actions': './store/actions',
            '@components': './components',
            '@images': './assets/images',
            '@screens': './screens',
            '@constants': './constants',
            '@hooks': './hooks',
            '@types': './types',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
