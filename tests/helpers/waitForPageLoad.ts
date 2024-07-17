import { Page } from '@playwright/test';

export const waitForPageLoad = async (page: Page): Promise<void> => {
  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);

  // Wait for images to load
  await page.waitForFunction(() => Array.from(document.querySelectorAll('img')).every((img) => img.complete));

  // Wait for transitions to finish
  await page.waitForLoadState();

  // Disable animations to avoid flaky screenshots
  await page.addStyleTag({ content: '*, *::before, *::after { animation-iteration-count: 1 !important }' });
};
