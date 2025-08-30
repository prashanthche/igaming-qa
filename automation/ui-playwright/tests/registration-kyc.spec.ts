import { test, expect } from '@playwright/test';
import path from 'path';

test('register then upload KYC document', async ({ page }) => {
  await page.goto('/register');
  await page.getByLabel('Email').fill(`test+${Date.now()}@example.com`);
  await page.getByLabel('Password').fill('Str0ngPass!');
  await page.getByLabel('Confirm Password').fill('Str0ngPass!');
  await page.getByRole('checkbox', { name: /i agree/i }).check();
  await page.getByRole('button', { name: /create account/i }).click();
  await expect(page.getByText(/verify|kyc/i)).toBeVisible();

  // KYC upload
  const kycPath = process.env.KYC_DOC_PATH || path.resolve(__dirname, '../../..', 'data', 'kyc-id.png');
  await page.setInputFiles('input[type="file"]', kycPath);
  await page.getByRole('button', { name: /submit|verify/i }).click();
  await expect(page.getByText(/in review|verified/i)).toBeVisible();
});
