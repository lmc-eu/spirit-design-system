import { dirname, resolve, join } from 'path';
import { fileURLToPath } from 'url';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

const pathDir = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  transpilePackages: ['@lmc-eu/spirit-web-react'],
  reactStrictMode: true,
  sassOptions: {
    fiber: false,
    implementation: 'sass-embedded',
    quietDeps: true,
    includePaths: [
      join(pathDir, '../../node_modules'),
      join(pathDir, '../../node_modules/@lmc-eu/spirit-design-tokens/scss'),
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@local': resolve(pathDir, './src'),
      },
    };
    config.module.rules.push({
      test: /\.(html)$/,
      use: [
        {
          loader: 'html-loader',
          options: {
            sources: {
              list: [
                {
                  tag: 'use',
                  attribute: 'xlink:href',
                  type: 'src',
                  filter: (tag, attribute, attributes) => {
                    // Ensure the attribute value exists before calling startsWith
                    const value = attributes[attribute];

                    return value && !value.startsWith('/');
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

const rehypePrettyCodeOptions = {
  theme: 'github-light',
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

export default withMDX(nextConfig);
