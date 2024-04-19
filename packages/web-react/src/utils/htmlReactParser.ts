/**
 * This is a workaround for the `html-react-parser` package.
 * The package weirdly exports the default function as `HTMLReactParser` and it is not working in our CJS builds.
 *
 * @see { @link https://github.com/remarkablemark/html-react-parser/issues/1329 }
 */
import htmlDomParser from 'html-dom-parser';
import domToReactLib from 'html-react-parser/lib/dom-to-react';

export const htmlReactParser = (html: string): ReturnType<typeof domToReactLib> => {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!html) {
    return [];
  }

  // support backwards compatibility for ES Module
  // @ts-expect-error Property 'default' does not exists on type -- exactly, we need to check it first
  const htmlToDOM = typeof htmlDomParser.default === 'function' ? htmlDomParser.default : htmlDomParser;
  // @ts-expect-error Property 'default' does not exists on type -- exactly, we need to check it first
  const domToReact = typeof domToReactLib.default === 'function' ? domToReactLib.default : domToReactLib;

  return domToReact(htmlToDOM(html));
};
