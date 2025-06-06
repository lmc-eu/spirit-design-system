import '@testing-library/jest-dom';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import ModalBody from '../ModalBody';

describe('ModalBody', () => {
  classNamePrefixProviderTest(ModalBody, 'ModalBody');

  stylePropsTest(ModalBody);

  restPropsTest(ModalBody, 'div');

  validHtmlAttributesTest(ModalBody);

  ariaAttributesTest(ModalBody);
});
