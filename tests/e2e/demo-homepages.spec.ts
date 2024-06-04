import { isTesting } from '@lmc-eu/spirit-common/constants/environments';
import { SERVERS, getDevelopmentEndpointUri } from '@lmc-eu/spirit-common/constants/servers';
import { expect, test } from '@playwright/test';

test.describe('Demo Homepages', () => {
  const demos = [
    {
      url: isTesting() ? SERVERS.TESTING.web : getDevelopmentEndpointUri('web', { isDocker: true }),
      package: 'web',
    },
    {
      url: isTesting() ? SERVERS.TESTING['web-react'] : getDevelopmentEndpointUri('web-react', { isDocker: true }),
      package: 'web-react',
    },
  ];

  for (const demo of demos) {
    test(`test demo homepage ${demo.package}`, async ({ page }) => {
      await page.goto(demo.url);
      // wait for fonts to load
      await page.evaluate(() => document.fonts.ready);
      // wait for transitions to finish
      await page.waitForLoadState();
      // disable animations to avoid flaky screenshots
      await page.addStyleTag({ content: '*, *::before, *::after { animation-iteration-count: 1 !important }' });
      await expect(page).toHaveScreenshot(`${demo.package}.png`, {
        animations: 'disabled',
        fullPage: true,
      });
    });
  }
});
