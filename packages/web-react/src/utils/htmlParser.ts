import warning from '../common/utilities/warning';

let parse = null;

import('html-react-parser')
  .then((htmlReactParser) => {
    parse = htmlReactParser;
  })
  .catch(() =>
    warning(
      false,
      '`html-react-parser` is not installed and will be required in the next major version. Please install, missing peer dependency.',
    ),
  );

export const htmlParser = typeof parse === 'function' ? parse : null;
