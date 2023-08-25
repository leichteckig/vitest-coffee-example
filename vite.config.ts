/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      // provider: 'v8',
      // reporter: ['html'],
      provider: 'istanbul',
      reportsDirectory: './test-reports',
    }
  },
});
