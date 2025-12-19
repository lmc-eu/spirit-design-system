import { test } from '@playwright/test';
import { assertNoA11yViolations, getServerUrl, getWCAG2AAConfig, waitForPageLoad } from '../../helpers';

test.describe('Modal Accessibility', () => {
  const serverUrl = getServerUrl('web-react');
  const a11yConfig = getWCAG2AAConfig();

  test('Modal component (closed state) has no a11y violations', async ({ page }) => {
    await page.goto(`${serverUrl}src/components/Modal/`);
    await waitForPageLoad(page);
    await assertNoA11yViolations(page, a11yConfig);
  });

  test('Modal component (open state) has no a11y violations', async ({ page }) => {
    await page.goto(`${serverUrl}src/components/Modal/`);
    await waitForPageLoad(page);

    const openButton = page.locator('button').first();
    await openButton.click();

    await page.waitForSelector('dialog[open]', { state: 'visible' });

    await assertNoA11yViolations(page, a11yConfig);
  });
});
