import { API, FileInfo } from 'jscodeshift';
import { removeParentheses } from '../../../helpers';
import { renameComponent } from '../../../helpers/renameComponent';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  renameComponent(j, root, 'UNSTABLE_Slider', 'Slider');
  renameComponent(j, root, 'UNSTABLE_UncontrolledSlider', 'UncontrolledSlider');

  return removeParentheses(root.toSource({ quote: 'single' }));
};

export default transform;
