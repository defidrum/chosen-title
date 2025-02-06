/// <reference types="vitest" />

import { defineConfig, mergeConfig } from "vite";
import viteConfig from "./vite.config";

// Explicitly define the type for the merged config
const mergedConfig = mergeConfig(
  viteConfig,
  defineConfig({
    resolve: {
      mainFields: ["module"]
    },
    test: {
      coverage: {
        reportOnFailure: true,
        provider: "v8",
        reporter: ['html', 'lcov', 'text', 'json'],
        include: ["**/*.{ts,tsx}"],
        exclude: ["**/__tests__/**/*.{ts,tsx}"]
      },
      environment: "jsdom",
      reports: [
        ['vitest-sonar-reporter', {
          outputFile: 'test-reports/test-report.xml',
          onWritePath(path: string) {
            return `PERSONAL_PROJECT/${path}`;
          }
        }]
      ],
      globals: true,
      setupFiles: "setupTests.ts",
      testTimeout: 15000,
    }
  })
) as import('vite').UserConfig;

export default mergedConfig;
