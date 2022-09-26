import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts','tsx','json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'babel-jest',
      {
        presets: ['next/babel'],
      },
    ],
    '^.+\\.(css|scss|sass)$': 'jest-scss-transform',
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/features/(.*)$': '<rootDir>/features/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{tsx,ts}'],
  coverageDirectory: './public/coverage'
}

export default config