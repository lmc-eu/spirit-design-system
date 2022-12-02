import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalBody from '../ModalBody';

describe('Modal', () => {
  classNamePrefixProviderTest(ModalBody, 'Modal__body');

  stylePropsTest(ModalBody);

  restPropsTest(ModalBody, 'div');
});
