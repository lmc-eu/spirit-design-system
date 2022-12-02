import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalFooter from '../ModalFooter';

describe('Modal', () => {
  classNamePrefixProviderTest(ModalFooter, 'Modal__footer');

  stylePropsTest(ModalFooter);

  restPropsTest(ModalFooter, 'div');
});
