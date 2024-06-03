import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import ModalFooter from '../ModalFooter';

describe('ModalFooter', () => {
  classNamePrefixProviderTest(ModalFooter, 'ModalFooter');

  stylePropsTest(ModalFooter);

  restPropsTest(ModalFooter, 'footer');
});
