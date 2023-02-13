import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalComposedBody from '../ModalComposedBody';

describe('ModalComposedBody', () => {
  classNamePrefixProviderTest(ModalComposedBody, 'ModalBody');

  stylePropsTest(ModalComposedBody);

  restPropsTest(ModalComposedBody, 'div');
});
