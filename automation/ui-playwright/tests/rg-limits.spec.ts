import { test, expect } from '@playwright/test';

test('set session limit and enforce', async ({ page }) => {
  await page.goto('/profile/limits');
  await page.getByLabel(/session limit/i).fill('5'); // minutes
  await page.getByRole('button', { name: /save/i }).click();
  await expect(page.getByText(/limit saved/i)).toBeVisible();

  // simulate time passing via feature flag or fast-forward endpoint (pseudo)
  await page.goto('/debug/fast-forward?minutes=6');
  await page.goto('/casino');
  await expect(page.getByText(/session limit reached/i)).toBeVisible();
});
