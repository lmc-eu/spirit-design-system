import '@testing-library/jest-dom';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import ModalBody from '../ModalBody';

describe('ModalBody', () => {
  classNamePrefixProviderTest(ModalBody, 'ModalBody');

  stylePropsTest(ModalBody);

  restPropsTest(ModalBody, 'div');
});
