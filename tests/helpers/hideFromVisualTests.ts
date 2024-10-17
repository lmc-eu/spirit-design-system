import { Page } from '@playwright/test';

export const hideFromVisualTests = async (page: Page): Promise<void> => {
  await page.addStyleTag({ content: '.hide-from-visual-tests { display: none !important }' });
};
