import { API, FileInfo } from 'jscodeshift';
import { removeParentheses } from '../../../helpers';
import { renameComponent } from '../../../helpers/renameComponent';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  renameComponent(j, root, 'UNSTABLE_EmptyState', 'EmptyState');
  renameComponent(j, root, 'UNSTABLE_EmptyStateSection', 'EmptyStateSection');

  return removeParentheses(root.toSource({ quote: 'single' }));
};

export default transform;
