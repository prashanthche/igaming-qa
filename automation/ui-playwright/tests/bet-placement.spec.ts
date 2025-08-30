import { test, expect } from '@playwright/test';

test('place a single bet (handle odds change)', async ({ page }) => {
  await page.goto('/sports/soccer');
  await page.getByRole('link', { name: /match a/i }).click();
  await page.getByRole('button', { name: /home win/i }).click(); // add to betslip
  await page.getByLabel(/stake/i).fill('10');
  await page.getByRole('button', { name: /place bet/i }).click();

  // Accept if odds change dialog appears
  const oddsChange = page.getByText(/odds have changed/i);
  if (await oddsChange.isVisible().catch(() => false)) {
    await page.getByRole('button', { name: /accept new odds/i }).click();
  }
  await expect(page.getByText(/bet accepted|bet id/i)).toBeVisible();
});
