import { test } from '@playwright/test';
import { assertNoA11yViolations, getServerUrl, getWCAG2AAConfig, waitForPageLoad } from '../../helpers';

test.describe('Homepage Accessibility', () => {
  const a11yConfig = getWCAG2AAConfig();

  test('Web React homepage has no a11y violations', async ({ page }) => {
    const serverUrl = getServerUrl('web-react');
    await page.goto(serverUrl);
    await waitForPageLoad(page);
    await assertNoA11yViolations(page, a11yConfig);
  });
});
