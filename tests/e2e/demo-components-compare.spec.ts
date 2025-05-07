/* eslint-disable no-console -- we want to log when test fails */
import { isTesting as isTestingEnvironment } from '@lmc-eu/spirit-common/constants/environments';
import { test } from '@playwright/test';
import { readdirSync } from 'fs';
import { formatPackageName, getServerUrl, hideFromVisualTests, takeScreenshot, waitForPageLoad } from '../helpers';

// Tests that are intentionally broken, but will be fixed in the future
const IGNORED_TESTS: string[] = [];

interface TestConfig {
  packageDir: string;
  componentsDir: string;
  srcDir?: string;
  packageName: string;
}

const runComponentCompareTests = (testConfig: TestConfig) => {
  const { packageDir, componentsDir, srcDir = '', packageName } = testConfig;
  if (packageName) {
    const formattedPackageName = formatPackageName(packageName);

    test.describe(`Demo ${formattedPackageName} Components`, () => {
      const componentDirs = readdirSync(`${packageDir}${srcDir}${componentsDir}`, { withFileTypes: true })
        .filter((item) => item.isDirectory())
        .filter((item) => readdirSync(`${packageDir}${srcDir}${componentsDir}/${item.name}`).includes('index.html'))
        .filter((item) => !IGNORED_TESTS.includes(item.name))
        // there is a problem with url on case insensitive systems
        .map((item) => (process.env.NODE_ENV ? item.name.toLowerCase() : item.name));

      for (const component of componentDirs) {
        test(`test demo ${formattedPackageName} component ${component}`, async ({ page }) => {
          try {
            const url = getServerUrl(packageName);
            await page.goto(`${url}${componentsDir}/${component}/`);
            await waitForPageLoad(page);
            await hideFromVisualTests(page);
            await takeScreenshot(page, `${component}`, { fullPage: true });
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

const testConfigs: TestConfig[] = [
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
];

testConfigs.forEach(runComponentCompareTests);
