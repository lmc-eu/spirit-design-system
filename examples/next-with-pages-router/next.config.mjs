import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const pathDir = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, {}) => {
    config.resolve.alias['@lmc-eu/spirit-design-tokens'] = path.join(
      pathDir,
      '../../node_modules/@lmc-eu/spirit-design-tokens/scss',
    );

    return config;
  },
  transpilePackages: ['@lmc-eu/spirit-web-react'],
  reactStrictMode: true,
  sassOptions: {
    fiber: false,
    includePaths: [
      path.join(pathDir, '../../node_modules'),
      path.join(pathDir, '../../node_modules/@lmc-eu/spirit-design-tokens/scss'),
      path.join(pathDir, 'src/styles'),
    ],
  },
};

export default nextConfig;
