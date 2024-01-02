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
      await expect(page).toHaveScreenshot(`${demo.package}.png`, { fullPage: true, maxDiffPixelRatio: 0.01 });
    });
  }
});
