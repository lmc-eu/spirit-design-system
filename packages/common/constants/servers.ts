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
      https: false,
      port: 5172,
      strictPort: true,
    },
    // @see: https://vitejs.dev/config/server-options.html
    'web-react': {
      host: 'localhost',
      https: false,
      port: 5173,
      strictPort: true,
    },
    'web-twig': {
      host: 'localhost',
      https: true,
      port: 4443,
    },
    // @see: https://vitejs.dev/config/server-options.html
    'form-validations': {
      host: 'localhost',
      https: false,
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

const getDevelopmentEndpointUri = (packageName, { isDocker } = { isDocker: false }) => {
  const { https, host, port } = SERVERS.DEVELOPMENT[packageName];

  return `http${https ? 's' : ''}://${isDocker ? 'host.docker.internal' : host}:${port}`;
};

module.exports = { SERVERS, getDevelopmentEndpointUri };
