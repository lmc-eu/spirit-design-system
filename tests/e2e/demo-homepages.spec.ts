import { expect, test } from '@playwright/test';

test.describe('Demo Homepages', () => {
  const demos = [
    {
      url: 'https://spirit-design-system-demo.netlify.app/',
      package: 'web',
    },
    {
      url: 'https://spirit-design-system-react.netlify.app/',
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
