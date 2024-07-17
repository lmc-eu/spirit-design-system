import { expect, Page, PageAssertionsToHaveScreenshotOptions } from '@playwright/test';

const defaultOptions: PageAssertionsToHaveScreenshotOptions = {
  animations: 'disabled',
  fullPage: false,
};

export const takeScreenshot = async (
  page: Page,
  name: string,
  options?: PageAssertionsToHaveScreenshotOptions,
): Promise<void> => {
  await expect(page).toHaveScreenshot(`${name.toLowerCase()}.png`, { ...defaultOptions, ...options });
};
