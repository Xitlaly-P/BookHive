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

test('navigate to About', async ({ page }) => {
  await page.goto('/');
  const aboutLink = page.locator('[data-testid="nav-about"]');
  await aboutLink.click();
  const aboutSection = await page.locator('#about');
  await expect(aboutSection).toBeVisible();
});

test('navigate to Testimonials', async ({ page }) => {
  await page.goto('/');
  const testimonialsLink = page.locator('[data-testid="nav-testimonials"]');
  await testimonialsLink.click();
  const testimonialsSection = await page.locator('#testimonials');
  await expect(testimonialsSection).toBeVisible();
});

test('navigate to Join', async ({ page }) => {
  await page.goto('/');
  const joinLink = page.locator('[data-testid="nav-join"]');
  await joinLink.click();
  const joinSection = await page.locator('#join');
  await expect(joinSection).toBeVisible();
});

test('discover button check', async ({ page }) => {
  await page.goto('/');
  const joinLink = page.locator('[data-testid="discoverbtn"]');
  await joinLink.click();
  const joinSection = await page.locator('#about');
  await expect(joinSection).toBeVisible();
});

test('check 404 page for non-existent route', async ({ page }) => {
  await page.goto('/non-existent-page');
  const errorMessage = await page.locator('text=404');
  await expect(errorMessage).toBeVisible();
});

test('check hero section button text', async ({ page }) => {
  await page.goto('/');
  const button = await page.locator('[data-testid="discoverbtn"]');
  await expect(button).toBeVisible();
  await expect(button).toHaveText('DISCOVER MORE');
});

test('check visibility of About section', async ({ page }) => {
  await page.goto('/');
  const aboutSection = page.locator('#about');
  await expect(aboutSection).toBeVisible();
});

test('check About section title', async ({ page }) => {
  await page.goto('/');
  const sectionTitle = page.locator('#about h1');
  await expect(sectionTitle).toBeVisible();
  await expect(sectionTitle).toHaveText('About');
});

test('check content for Books item', async ({ page }) => {
  await page.goto('/');
  const bookTitle = page.locator('#about h2:text("Books")');
  const bookDescription = page.locator('#about p:text("At The Book Hive, we believe in the power of stories")');
  
  await expect(bookTitle).toBeVisible();
  await expect(bookDescription).toBeVisible();
});

test('check content for Cafe item', async ({ page }) => {
  await page.goto('/');
  const cafeTitle = page.locator('#about h2:text("Cafe")');
  const cafeDescription = page.locator('#about p:text("The Book Hive Café is a cozy spot")');
  
  await expect(cafeTitle).toBeVisible();
  await expect(cafeDescription).toBeVisible();
});

test('check content for Events item', async ({ page }) => {
  await page.goto('/');
  const eventsTitle = page.locator('#about h2:text("Events")');
  const eventsDescription = page.locator('#about p:text("At The Book Hive, our events and lounge space")');
  
  await expect(eventsTitle).toBeVisible();
  await expect(eventsDescription).toBeVisible();
});

test('check visibility of Testimonials section', async ({ page }) => {
  await page.goto('/');
  const testimonialsSection = page.locator('#testimonials');
  await expect(testimonialsSection).toBeVisible();
});

test('check Testimonials section title', async ({ page }) => {
  await page.goto('/');
  const sectionTitle = page.locator('#testimonials h1');
  await expect(sectionTitle).toBeVisible();
  await expect(sectionTitle).toHaveText('Testimonials');
});

test('check visibility and content of testimonial cards', async ({ page }) => {
  await page.goto('/');
  // Check first testimonial
  const testimonial1 = page.locator('#testimonials .card').nth(0);
  await expect(testimonial1).toBeVisible();
  await expect(testimonial1.locator('img')).toHaveAttribute('src', '/images/user1.png');
  await expect(testimonial1.locator('p')).toHaveText("“I started coming to The Book Hive for the board game nights, and it quickly became my favorite hangout. The sense of community here is amazing, and I've met so many wonderful people. Whether it's a game night or a book club meeting, there's always something fun going on.”");

  // Check second testimonial
  const testimonial2 = page.locator('#testimonials .card').nth(1);
  await expect(testimonial2).toBeVisible();
  await expect(testimonial2.locator('img')).toHaveAttribute('src', '/images/user2.png');
  await expect(testimonial2.locator('p')).toHaveText("“The Book Hive has become a second home for me. I love attending the book club meetings where I can discuss my favorite books with like-minded people. The atmosphere is always welcoming, and the café offers the best coffee in town. It's a place where everyone feels like family.”");

  // Check third testimonial
  const testimonial3 = page.locator('#testimonials .card').nth(2);
  await expect(testimonial3).toBeVisible();
  await expect(testimonial3.locator('img')).toHaveAttribute('src', '/images/user3.png');
  await expect(testimonial3.locator('p')).toHaveText("“The Book Hive's movie nights are a highlight of my week. It's such a welcoming space, and I love how they bring the community together. Plus, their selection of snacks and drinks makes it even better. It's the perfect place to unwind and enjoy a good film with friends.”");
});

test('check visibility of Join section', async ({ page }) => {
  await page.goto('/');
  const joinSection = page.locator('#join');
  await expect(joinSection).toBeVisible();
});

test('check Join section title', async ({ page }) => {
  await page.goto('/');
  const sectionTitle = page.locator('#join h1');
  await expect(sectionTitle).toBeVisible();
  await expect(sectionTitle).toHaveText('Join');
});

test('check visibility of Footer', async ({ page }) => {
  await page.goto('/');
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
});

test('check Footer logo visibility and alt text', async ({ page }) => {
  await page.goto('/');
  const logo = page.locator('footer img[alt="The Book Hive Logo"]');
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute('src', '/images/logo.svg');
  await expect(logo).toHaveAttribute('alt', 'The Book Hive Logo');
});

test('check Footer title text', async ({ page }) => {
  await page.goto('/');
  const title = page.locator('footer h2');
  await expect(title).toBeVisible();
  await expect(title).toHaveText('The Book Hive');
});

test('check Footer copyright text', async ({ page }) => {
  await page.goto('/');
  const currentYear = new Date().getFullYear();
  const copyrightText = `The Book Hive © ${currentYear} All Rights Reserved`;
  const copyright = page.locator('footer p');
  await expect(copyright).toBeVisible();
  await expect(copyright).toHaveText(copyrightText);
});