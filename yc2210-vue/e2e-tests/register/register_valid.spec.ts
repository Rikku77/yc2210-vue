import { test, expect } from '@playwright/test';

test('register valid', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/register');


  const emailField = await page.getByLabel('Email address').type('testma@mail.com');
  const passwordField = await page.getByLabel('Password').type('wachtwoord1234567');

  await page.click('#submit-button', {trial: true});

  const expected = 'You submitted successfully!';
  await expect(page.locator(`body:has(div[class="submitted"]) >> p`)).toHaveText(expected)
});
