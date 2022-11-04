import { test, expect } from '@playwright/test';

test('Register - When emailfield has no at sign, span element should show message: "Email is invalid" and register button should be disabled', async ({ page }) => {

  // 1. Go to register page
  await page.goto('http://127.0.0.1:5173/register');

  // 2. Fill emailfield with invalid value
  await page.getByLabel('Email address').type('testmail.com');

  // 3. Check span message
  const expected = 'Emailaddress is invalid';
  const emailSpan =  page.locator('#email-span');
  await expect(emailSpan).toContainText(expected);

  // 4. Check if submit button is disabled
   const submitButton = page.locator('#submit-button');
  await expect(submitButton).toBeDisabled();
});