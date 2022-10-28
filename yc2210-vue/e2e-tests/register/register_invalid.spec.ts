import { test, expect } from '@playwright/test';

test('register invalid', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/register');


  const emailField = await page.getByLabel('Email address').fill('testmail@mail.com');
  const passwordField = await page.getByLabel('Password').fill('wachtwoord123');

  await expect(page.locator('.submitted')).not.toBeVisible()
});