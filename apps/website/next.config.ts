import { dirname, resolve, join } from 'path';
import { fileURLToPath } from 'url';
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import remarkGfm from 'remark-gfm';

const pathDir = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
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
        '@local': resolve(__dirname, './src'),
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
                  filter: (tag: unknown, attribute: string | number, attributes: { [x: string]: string }) => {
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

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
