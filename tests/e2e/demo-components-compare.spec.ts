/* eslint-disable no-console -- we want to log when test fails */
import { isTesting as isTestingEnvironment } from '@lmc-eu/spirit-common/constants/environments';
import { SERVERS, getDevelopmentEndpointUri } from '@lmc-eu/spirit-common/constants/servers';
import { expect, test } from '@playwright/test';
import { readdirSync } from 'fs';

// Tests that are intentionally broken, but will be fixed in the future
const IGNORED_TESTS = [];

const runComponentCompareTests = (testConfig) => {
  const { packageDir, componentsDir, srcDir = '', packageName } = testConfig;
  if (packageName) {
    const formattedPackageName = packageName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    test.describe(`Demo ${formattedPackageName} Components`, () => {
      const componentDirs = readdirSync(`${packageDir}${srcDir}${componentsDir}`, { withFileTypes: true })
        .filter((item) => item.isDirectory())
        .filter((item) =>
          readdirSync(`${packageDir}${srcDir}${componentsDir}/${item.name}`).includes(
            packageName !== 'web-twig' ? 'index.html' : `${item.name}.stories.twig`,
          ),
        )
        .filter((item) => !IGNORED_TESTS.includes(item.name))
        // there is a problem with url on case insensitive systems
        .map((item) => (process.env.NODE_ENV ? item.name.toLowerCase() : item.name));

      for (const component of componentDirs) {
        test(`test demo ${formattedPackageName} component ${component}`, async ({ page }) => {
          try {
            await page.goto(
              `${
                isTestingEnvironment()
                  ? SERVERS.TESTING[packageName]
                  : getDevelopmentEndpointUri(packageName, { isDocker: packageName !== 'web-twig' })
              }${componentsDir}/${component}/${packageName === 'web-twig' ? '?HIDE_TOOLBAR' : ''}`,
            );
            // wait for fonts to load
            await page.evaluate(() => document.fonts.ready);
            // wait for images to load
            await page.waitForFunction(() => {
              const images = Array.from(document.querySelectorAll('img'));

              return images.every((img) => img.complete);
            });
            // wait for transitions to finish
            await page.waitForLoadState();
            // disable animations to avoid flaky screenshots
            await page.addStyleTag({ content: '*, *::before, *::after { animation-iteration-count: 1 !important }' });
            await expect(page).toHaveScreenshot(`${component}.png`, {
              animations: 'disabled',
              fullPage: true,
            });
          } catch (error) {
            // beware of the case insensitive systems; keep the prefix in the small case
            if (!component.startsWith('unstable_')) {
              console.error(`Test for demo ${formattedPackageName} component ${component} failed. ${error}`);
              // Rethrow the error for stable components only
              throw error;
            } else {
              console.warn(
                `Test for unstable demo ${formattedPackageName} component ${component} failed, but it's marked as acceptable. ${error}`,
              );
            }
          }
        });
      }
    });
  }
};

const testConfigs = [
  {
    componentsDir: '/src/scss/components',
    packageDir: 'packages/web',
    packageName: 'web',
  },
  {
    componentsDir: '/src/components',
    packageDir: 'packages/web-react',
    packageName: 'web-react',
  },
  // Disable web-twig tests for now on CI, because we don't have a way to run them in CI yet.
  !isTestingEnvironment() && {
    componentsDir: '/components',
    packageDir: 'packages/web-twig',
    packageName: 'web-twig',
    srcDir: '/src/Resources',
  },
];

testConfigs.forEach(runComponentCompareTests);
