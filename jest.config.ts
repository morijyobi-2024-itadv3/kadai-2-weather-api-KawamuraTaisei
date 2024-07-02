import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>'],
  testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}

export default config
