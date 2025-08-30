import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill(process.env.TEST_USERNAME || 'user@example.com');
  await page.getByLabel('Password').fill(process.env.TEST_PASSWORD || 'P@ssw0rd!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText(/wallet|balance/i)).toBeVisible();
});

test('deposit increases balance', async ({ page }) => {
  await page.getByRole('link', { name: /wallet|deposit/i }).click();
  await page.getByLabel(/amount/i).fill('50');
  await page.getByRole('button', { name: /card/i }).click();
  await page.getByRole('button', { name: /confirm/i }).click();
  await expect(page.getByText(/balance:\s*\$?\s*\d+/i)).toBeVisible();
});

test('withdrawal after settlement', async ({ page }) => {
  await page.getByRole('link', { name: /wallet|withdraw/i }).click();
  await page.getByLabel(/amount/i).fill('20');
  await page.getByRole('button', { name: /confirm/i }).click();
  await expect(page.getByText(/withdrawal.*submitted/i)).toBeVisible();
});
