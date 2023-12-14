import { SERVERS, getDevelopmentEndpointUri } from '@lmc-eu/spirit-common/constants/servers';
import { expect, test } from '@playwright/test';

test.describe('Demo Homepages', () => {
  const demos = [
    {
      url: process.env.CI ? SERVERS.PRODUCTION.web : getDevelopmentEndpointUri('web'),
      package: 'web',
    },
    {
      url: process.env.CI ? SERVERS.PRODUCTION['web-react'] : getDevelopmentEndpointUri('web-react'),
      package: 'web-react',
    },
  ];

  for (const demo of demos) {
    test(`test demo homepage ${demo.package}`, async ({ page }) => {
      await page.goto(demo.url);
      await expect(page).toHaveScreenshot(`${demo.package}.png`, { fullPage: true, maxDiffPixelRatio: 0.01 });
    });
  }
});
