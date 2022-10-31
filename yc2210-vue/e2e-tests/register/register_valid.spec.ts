import { test, expect } from '@playwright/test';

test('register valid', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/register');


  const emailField = await page.getByLabel('Email address').fill('testmail@mail.com');
  const passwordField = await page.getByLabel('Password').fill('wachtwoord123');

  await page.getByText('Register').click();

  await expect(page.locator('.submitted')).toBeVisible();
});
