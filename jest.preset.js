const path = require('path');
const nxPreset = require('@nrwl/jest/preset').default;
const { projects } = require(path.resolve(__dirname, 'workspace.json'));

const reporters = [
  'default',
  [
    'jest-junit',
    {
      outputDirectory: `coverage/${
        projects[process.env['NX_TASK_TARGET_PROJECT']]
      }`,
      suiteNameTemplate: ({ filepath }) => filepath,
    },
  ],
];

module.exports = {
  ...nxPreset,
  setupFiles: ['whatwg-fetch'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.ts',
  ],
  reporters,
};
