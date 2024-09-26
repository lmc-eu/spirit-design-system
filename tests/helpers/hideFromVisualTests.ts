import { Page } from '@playwright/test';

export const hideFromVisualTests = async (page: Page): Promise<void> => {
  // Hide header from screenshots
  await page.addStyleTag({ content: '.hide-from-visual-tests { display: none !important }' });
};
