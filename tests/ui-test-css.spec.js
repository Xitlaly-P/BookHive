import { test, expect } from "@playwright/test";

test('check that the title is "The Book Hive"', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  // Get the title of the pag
  const title = await page.title();

  // Check if the title is "Xitlaly Prado"
  await expect(title).toBe('The Book Hive');
});
