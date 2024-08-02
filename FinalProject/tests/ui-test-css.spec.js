import { test, expect } from "@playwright/test";

test.describe("JoinSection Component", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the JoinSection component is rendered
    await page.waitForLoadState("load");
  });

  test("should render the Join section title", async ({ page }) => {
    const sectionTitle = page.locator(".section_title_container h1");
    await expect(sectionTitle).toBeVisible();
    await expect(sectionTitle).toHaveText("Join");
  });

  test("should display the correct heading and paragraphs", async ({
    page,
  }) => {
    const heading = page.locator(".content h2");
    await expect(heading).toHaveText("Join the Hive Today");

    const paragraphs = page.locator(".content p");
    await expect(paragraphs).toHaveCount(2);
    await expect(paragraphs.nth(0)).toHaveText(
      "Get a FREE dessert on us by signing up for our weekly newsletter!"
    );
    await expect(paragraphs.nth(1)).toContainText(
      "Stay connected with The Book Hive to get the latest updates"
    );
  });

  test("should have an email input field with correct placeholder", async ({
    page,
  }) => {
    const emailInput = page.locator("input.email-input");
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute("type", "email");
    await expect(emailInput).toHaveAttribute(
      "placeholder",
      "Enter Email Address"
    );
  });

  test("should display the email icon", async ({ page }) => {
    const emailIcon = page.locator("img.email-icon");
    await expect(emailIcon).toBeVisible();
    await expect(emailIcon).toHaveAttribute("src", "/images/mail.svg");
    await expect(emailIcon).toHaveAttribute("alt", "Email Icon");
  });

  test("should have a submit button with correct SVG", async ({ page }) => {
    const submitButton = page.locator(".submit-button");
    await expect(submitButton).toBeVisible();

    const svg = submitButton.locator("svg");
    await expect(svg).toBeVisible();
    await expect(svg).toHaveAttribute("width", "48");
    await expect(svg).toHaveAttribute("height", "48");
  });

  test("should display the join image", async ({ page }) => {
    const joinImage = page.locator(
      "img[alt='People enjoying coffee at The Book Hive']"
    );
    await expect(joinImage).toBeVisible();
    await expect(joinImage).toHaveAttribute("width", "580");
    await expect(joinImage).toHaveAttribute("height", "600");
  });

  test("email input should be interactive", async ({ page }) => {
    const emailInput = page.locator("input.email-input");
    await emailInput.click();
    await emailInput.fill("test@example.com");
    await expect(emailInput).toHaveValue("test@example.com");
  });
});
