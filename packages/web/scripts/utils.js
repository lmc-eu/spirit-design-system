import { readdirSync } from 'fs';

export const kebabToTitleCase = (string) =>
  string
    .split('-')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');

export const getListOfNestedDirectories = (path) => [
  ...readdirSync(path, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => ({
      name: item.name,
      title: kebabToTitleCase(item.name),
    })),
];

export const getListOfIcons = (path) => [
  ...readdirSync(path, { withFileTypes: true }).map((item) => item.name.slice(0, -4)),
];
