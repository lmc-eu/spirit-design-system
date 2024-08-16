/* eslint-disable no-console -- we want to log when test fails */
import { isTesting as isTestingEnvironment } from '@lmc-eu/spirit-common/constants/environments';
import { test, Page } from '@playwright/test';
import { formatPackageName, getServerUrl, waitForPageLoad, takeScreenshot } from '../../helpers';

type TestConfig = {
  componentsDir: string;
  packageName: string;
  componentName: string;
};

type ModalTestConfig = {
  openSelector: string;
  testName: string;
};

const runComponentCompareTests = ({ componentsDir, packageName, componentName }: TestConfig): void => {
  if (!packageName) return;

  const formattedPackageName = formatPackageName(packageName);

  test.describe(`Test opened Modal`, () => {
    test(`Test ${componentName} component in ${formattedPackageName} package`, async ({ page }: { page: Page }) => {
      try {
        const url = getServerUrl(packageName);
        await page.goto(`${url}${componentsDir}/${componentName}/${packageName === 'web-twig' ? '?HIDE_TOOLBAR' : ''}`);
        await waitForPageLoad(page);
        await runModalTests(page, componentName);
      } catch (error) {
        console.error(`Test for demo ${formattedPackageName} component ${componentName} failed. ${error}`);
        throw error;
      }
    });
  });
};

const runModalTests = async (page: Page, componentName: string): Promise<void> => {
  // open basic modal, close with backdrop click
  await page.click('[data-test-id="modal-basic"]');
  await takeScreenshot(page, `${componentName}-basic`);
  await page.locator('body').click({ position: { x: 0, y: 0 } });

  // open modal and dropdown inside, close with close button
  await page.click('[data-test-id="modal-with-dropdown"]');
  await page.click('dialog[open] .Dropdown button');
  await takeScreenshot(page, `${componentName}-with-dropdown`);
  await page.click('dialog[open] header button');

  // open two stacking modals, close with escape keys
  await page.click('[data-test-id="modal-stacking"]');
  await page.click('dialog[open] footer button');
  await takeScreenshot(page, `${componentName}-stacking`);
  await page.keyboard.press('Escape');
  await page.keyboard.press('Escape');

  // open modal with hidden close button, close with action button
  await page.click('button[data-test-id="modal-with-hidden-close-button"]');
  await takeScreenshot(page, `${componentName}-hidden-close-button`);
  await page.click('dialog[open] footer button');

  // open rest of modals and take screenshots, close with close button
  for (const config of modalTestConfigs) {
    await page.click(`[data-test-id="${config.openSelector}"]`);
    await takeScreenshot(page, `${componentName}-${config.testName}`);
    await page.click('dialog[open] header button');
  }

  // screenshot of closed modals
  await takeScreenshot(page, `${componentName}-closed-modals`, { fullPage: true });
};

const modalTestConfigs: ModalTestConfig[] = [
  {
    openSelector: 'modal-with-form',
    testName: 'with-form',
  },
  {
    openSelector: 'modal-with-long-content',
    testName: 'with-long-content',
  },
  {
    openSelector: 'modal-with-scrolling-inside',
    testName: 'with-scrolling-inside',
  },
  {
    openSelector: 'modal-with-scrollview',
    testName: 'with-scrollview',
  },
  {
    openSelector: 'modal-with-custom-height',
    testName: 'with-custom-height',
  },
  {
    openSelector: 'modal-with-disabled-backdrop-click',
    testName: 'disabled-backdrop-click',
  },
];

const componentName = 'Modal';

const testConfigs: TestConfig[] = [
  // Commented out because we changed tokens and broke utilities, helper and styles used in the demos.
  // Should be uncommented in DS-1452 ticket.
  // Jan Kryšpín 2024-08-27
  // {
  //   componentName,
  //   componentsDir: '/src/scss/components',
  //   packageName: 'web',
  // },
  // {
  //   componentName,
  //   componentsDir: '/src/components',
  //   packageName: 'web-react',
  // },
];

// Disable web-twig tests for now on CI, because we don't have a way to run them in CI yet.
if (!isTestingEnvironment()) {
  // testConfigs.push({
  //   componentName,
  //   componentsDir: '/components',
  //   packageName: 'web-twig',
  // });
}

testConfigs.forEach(runComponentCompareTests);
