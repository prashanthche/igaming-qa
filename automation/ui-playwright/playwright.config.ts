import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  use: {
    baseURL: process.env.BASE_URL || 'https://demo.igaming.example',
    headless: true,
    trace: 'on-first-retry',
  },
  reporter: [['list']],
});
