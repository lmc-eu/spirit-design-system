import { test } from '@playwright/test';
import { assertNoA11yViolations, getServerUrl, getWCAG2AAConfig, waitForPageLoad } from '../../helpers';

test.describe('Select Accessibility', () => {
  const serverUrl = getServerUrl('web-react');
  const a11yConfig = getWCAG2AAConfig();

  test('Select component has no a11y violations', async ({ page }) => {
    await page.goto(`${serverUrl}src/components/Select/`);
    await waitForPageLoad(page);
    await assertNoA11yViolations(page, a11yConfig);
  });
});
