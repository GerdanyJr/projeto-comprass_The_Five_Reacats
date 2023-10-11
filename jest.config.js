module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/utils/svgMock',
  },
  coverageReporters: ['html'],
  testMatch: ['**/*.test.ts?(x)', '**/*.test.js?(x)'],
};
