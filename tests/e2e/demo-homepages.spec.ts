// import { isTesting } from '@lmc-eu/spirit-common/constants/environments';
// import { SERVERS, getDevelopmentEndpointUri } from '@lmc-eu/spirit-common/constants/servers';
import { test } from '@playwright/test';
import { takeScreenshot, waitForPageLoad } from '../helpers';

test.describe('Demo Homepages', () => {
  const demos = [
    // Commented out because we changed tokens and broke utilities, helper and styles used in the demos.
    // Can be enabled when new styles are applied to the demos. Or in the DS-1455 ticket.
    // Jan Kryšpín 2024-08-27
    // {
    //   url: isTesting() ? SERVERS.TESTING.web : getDevelopmentEndpointUri('web', { isDocker: true }),
    //   package: 'web',
    // },
    // {
    //   url: isTesting() ? SERVERS.TESTING['web-react'] : getDevelopmentEndpointUri('web-react', { isDocker: true }),
    //   package: 'web-react',
    // },
  ];

  for (const demo of demos) {
    test(`test demo homepage ${demo.package}`, async ({ page }) => {
      await page.goto(demo.url);
      await waitForPageLoad(page);
      await takeScreenshot(page, demo.package, { fullPage: true });
    });
  }
});
