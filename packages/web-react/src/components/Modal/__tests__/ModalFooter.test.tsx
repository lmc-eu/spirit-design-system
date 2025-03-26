import '@testing-library/jest-dom';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import ModalFooter from '../ModalFooter';

describe('ModalFooter', () => {
  classNamePrefixProviderTest(ModalFooter, 'ModalFooter');

  stylePropsTest(ModalFooter);

  restPropsTest(ModalFooter, 'footer');

  validHtmlAttributesTest(ModalFooter);
});
