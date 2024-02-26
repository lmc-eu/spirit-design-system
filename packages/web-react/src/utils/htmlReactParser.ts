/**
 * This is a workaround for the `html-react-parser` package.
 * The package weirdly exports the default function as `HTMLReactParser` and it is not working in our CJS builds.
 *
 * @see { @link https://github.com/remarkablemark/html-react-parser/issues/1329 }
 */
import htmlToDOM from 'html-dom-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';

export const htmlReactParser = (html: string): ReturnType<typeof domToReact> => {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!html) {
    return [];
  }

  return domToReact(htmlToDOM(html));
};
