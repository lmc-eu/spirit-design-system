import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import ResizeObserverPolyfill from 'resize-observer-polyfill';

/**
 * Maybe we can just mock the ResizeObserver
 *
 * @see { link https://github.com/carbon-design-system/carbon/blob/main/config/jest-config-carbon/setup/setup.js#L38-L46 }
 */
global.ResizeObserver = ResizeObserverPolyfill;

/**
 * @todo Place here the content of the `packages/web-react/config/jest/setupTestingLibrary.ts`
 * @see { @link https://github.com/lmc-eu/spirit-design-system/issues/1413 }
 *
 * Here should be the setup of the general mocks like one for console.log, etc.
 * Also consider better patching of the Console.
 * @see { @link https://github.com/carbon-design-system/carbon/blob/main/config/jest-config-carbon/setup/setupAfterEnv.js }
 */

/**
 * While it should be bundled with jsdom, it isn't with jsdom 16.
 */
Object.assign(global, { TextDecoder, TextEncoder });
