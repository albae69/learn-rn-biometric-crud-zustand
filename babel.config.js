module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
