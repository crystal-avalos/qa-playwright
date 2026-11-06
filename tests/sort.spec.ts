import { test, expect } from '@playwright/test';

test('products can be sorted by price low to high', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

  await expect(page.locator('[data-test="inventory-item-price"]').first()).toHaveText('$7.99');
  await expect(page.locator('[data-test="inventory-item-price"]').last()).toHaveText('$49.99');
});