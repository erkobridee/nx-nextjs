const nxPreset = require('@nrwl/jest/preset').default;

const jestHelpersDir = `${__dirname}/tools/jest-helpers`;

module.exports = {
  ...nxPreset,
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  moduleNameMapper: {
    '^.+\\.svg$': `${jestHelpersDir}/svgrMock.js`,
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${jestHelpersDir}/fileMock.js`,
  },
};
