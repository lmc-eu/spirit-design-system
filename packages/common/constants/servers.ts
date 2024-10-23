export type PackageName = 'web' | 'web-react' | 'web-twig' | 'form-validations';
export type ServerOptions = { host: string; https: boolean; port: number; path?: string; strictPort?: boolean };
export type ServerEnvironments = {
  DEVELOPMENT: Record<PackageName, ServerOptions>;
  TESTING: Partial<Record<PackageName, string>>;
};

const SERVERS: ServerEnvironments = {
  DEVELOPMENT: {
    // @see: https://vitejs.dev/config/server-options.html
    web: {
      host: 'localhost',
      https: false,
      port: 3456,
      strictPort: true,
      path: 'packages/web/',
    },
    // @see: https://vitejs.dev/config/server-options.html
    'web-react': {
      host: 'localhost',
      https: false,
      port: 3456,
      strictPort: true,
      path: 'packages/web-react/',
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
    web: `${process.env.WEBSITE_URL || 'https://spirit-design-system.netlify.app'}/packages/web/`,
    'web-react': `${process.env.WEBSITE_URL || 'https://spirit-design-system.netlify.app'}/packages/web-react/`,
    'web-twig': process.env.DEMO_WEB_TWIG_URL || '',
  },
};

const getDevelopmentEndpointUri = (packageName: PackageName, { isDocker } = { isDocker: false }) => {
  const { https, host, port, path } = SERVERS.DEVELOPMENT[packageName];

  return `http${https ? 's' : ''}://${isDocker ? 'host.docker.internal' : host}:${port}${path ? `/${path}` : ''}`;
};

export { SERVERS, getDevelopmentEndpointUri };
