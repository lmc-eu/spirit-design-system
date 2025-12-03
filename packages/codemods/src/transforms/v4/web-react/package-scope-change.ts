import { API, FileInfo } from 'jscodeshift';
import { removeParentheses } from '../../../helpers';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root
    .find(j.ImportDeclaration, {
      source: {
        value: (value: string) => /^@lmc-eu\/spirit-web-react(\/.*)?$/.test(value),
      },
    })
    .forEach((path) => {
      if (path.node.source.value && typeof path.node.source.value === 'string') {
        path.node.source.value = path.node.source.value.replace(
          '@lmc-eu/spirit-web-react',
          '@alma-oss/spirit-web-react',
        );
      }
    });

  return removeParentheses(root.toSource({ quote: 'single' }));
};

export default transform;
