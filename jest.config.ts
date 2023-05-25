/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import { pathsToModuleNameMapper } from 'ts-jest';
import tsconfig from './tsconfig.tests.json';

const { compilerOptions } = tsconfig;

process.env.TZ = 'UTC';

export default {
  transform: {
    '^.+\\.ts?$': ['ts-jest', { tsconfig: 'tsconfig.tests.json', diagnostics: false, isolatedModules: true }],
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  coverageThreshold: {
    global: {
      lines: 60,
      statements: 60,
      branches: 60,
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  preset: 'ts-jest',
  testRegex: 'test/.*\\.(test|spec)\\.(js|ts)$',
};
