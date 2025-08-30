import { test, expect } from '@playwright/test';

test('login with valid credentials', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill(process.env.TEST_USERNAME || 'user@example.com');
  await page.getByLabel('Password').fill(process.env.TEST_PASSWORD || 'P@ssw0rd!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText(/welcome/i)).toBeVisible();
});

test('block login for self-excluded user', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill('self.excluded@example.com');
  await page.getByLabel('Password').fill('DoesNotMatter1!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText(/account restricted|self-excluded/i)).toBeVisible();
});
