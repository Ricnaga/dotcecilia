import { pathsToModuleNameMapper, JestConfigWithTsJest } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/pages/**/*.[jt]s?(x)',
    '!<rootDir>/src/pages/**/*.{spec,test}.[jt]s?(x)',
    '<rootDir>/src/shared/components/**/*.[jt]s?(x)',
    '!<rootDir>/src/shared/components/**/*.{spec,test}.[jt]s?(x)',
    '<rootDir>/src/shared/hooks/*.[jt]s',
    '!<rootDir>/src/shared/hooks/*.{spec,test}.[jt]s',
  ],
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'json', 'text', 'text-summary'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/application/test/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
};

export default config;
