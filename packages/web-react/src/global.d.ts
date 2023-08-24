declare module '*.md?raw' {
  const content: string;
  export default content;
}

interface Window {
  console: Console;
}

/**
 * Declaring `prettier` module to fix following problem
 *
 * ../../node_modules/@storybook/components/dist/index.d.ts:5:35
 * error TS7016: Could not find a declaration file for module 'prettier'. '/spirit-design-system/node_modules/prettier/index.js' implicitly has an 'any' type.
 *  Try `npm i --save-dev @types/prettier` if it exists or add a new declaration (.d.ts) file containing `declare module 'prettier';`
 * 5 import { BuiltInParserName } from 'prettier';
 */
declare module 'prettier' {
  export type BuiltInParserName = unknown;
}
