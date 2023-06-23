import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalFooter from '../ModalFooter';

describe('ModalFooter', () => {
  classNamePrefixProviderTest(ModalFooter, 'ModalFooter');

  stylePropsTest(ModalFooter);

  restPropsTest(ModalFooter, 'footer');
});
