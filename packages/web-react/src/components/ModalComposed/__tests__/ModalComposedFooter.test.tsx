import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalComposedFooter from '../ModalComposedFooter';

describe('ModalComposedFooter', () => {
  classNamePrefixProviderTest(ModalComposedFooter, 'ModalFooter');

  stylePropsTest(ModalComposedFooter);

  restPropsTest(ModalComposedFooter, 'footer');
});
