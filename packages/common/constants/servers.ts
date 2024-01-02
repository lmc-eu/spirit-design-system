/**
 * ⚠️ This file is in CommonJS format only.
 * It is mainly used in Vite configuration (`vite.config.ts`).
 * Due to use of ESbuild, Vite configuration only supports importing CommonJS modules.
 *
 * @see https://github.com/vitejs/vite/issues/7981
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const SERVERS = {
  DEVELOPMENT: {
    // @see: https://vitejs.dev/config/server-options.html
    web: {
      host: 'localhost',
      port: 5172,
      strictPort: true,
    },
    // @see: https://vitejs.dev/config/server-options.html
    'web-react': {
      host: 'localhost',
      port: 5173,
      strictPort: true,
    },
    'web-twig': {
      host: 'localhost',
      port: 4443,
    },
    // @see: https://vitejs.dev/config/server-options.html
    'form-validations': {
      host: 'localhost',
      port: 5174,
      strictPort: true,
    },
  },
  TESTING: {
    web: 'https://spirit-design-system-demo.netlify.app/',
    'web-react': 'https://spirit-design-system-react.netlify.app/',
    'web-twig': '',
  },
};

const getDevelopmentEndpointUri = (packageName) =>
  `http://${SERVERS.DEVELOPMENT[packageName].host}:${SERVERS.DEVELOPMENT[packageName].port}`;

module.exports = { SERVERS, getDevelopmentEndpointUri };
