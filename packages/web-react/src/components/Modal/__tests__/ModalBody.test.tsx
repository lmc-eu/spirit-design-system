import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import ModalBody from '../ModalBody';

describe('ModalBody', () => {
  classNamePrefixProviderTest(ModalBody, 'ModalBody');

  stylePropsTest(ModalBody);

  restPropsTest(ModalBody, 'div');
});
