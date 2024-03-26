import type { Config } from '@jest/types'

const baseDir = '<rootDir>/src/Presentation/';
const baseTestDir = '<rootDir>/src/Test';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`,
        `${baseDir}/**/*.tsx`
    ],
    testMatch:[
        `${baseTestDir}/**/*test.ts`,
    ],
    setupFilesAfterEnv: [
        `${baseTestDir}/setupTests.ts`
      ]
}

export default config;