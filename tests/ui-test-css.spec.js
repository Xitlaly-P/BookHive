import { test, expect } from "@playwright/test";

test('check that the title is "The Book Hive"', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  // Get the title of the pag
  const title = await page.title();

  // Check if the title is "Xitlaly Prado"
  await expect(title).toBe('The Book Hive');
});

test('check hero section title is "The Book Hive"', async ({ page }) => {
  await page.goto('/');

  const heroTitle = await page.locator('[data-testid="hero-title"]');
  await expect(heroTitle).toBeVisible();
  await expect(heroTitle).toHaveText('The Book Hive');
});

test('check hero section description is correct', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  const heroDescription = await page.locator('[data-testid="hero-description"]');
  await expect(heroDescription).toBeVisible();

  // Trim and normalize whitespace in the text content
  const descriptionText = await heroDescription.textContent();
  const expectedText = 'A family-run bookstore and café where everyone feels at home. Trusted by over 500 local book lovers and counting! Join your community at The Book Hive';
  await expect(descriptionText.trim().replace(/\s+/g, ' ')).toBe(expectedText);
});
