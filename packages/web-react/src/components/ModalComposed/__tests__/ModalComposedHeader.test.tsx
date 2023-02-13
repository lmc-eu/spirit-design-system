import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalComposedHeader from '../ModalComposedHeader';

describe('ModalComposedHeader', () => {
  classNamePrefixProviderTest(ModalComposedHeader, 'ModalHeader');

  stylePropsTest(ModalComposedHeader);

  restPropsTest(ModalComposedHeader, 'header');
});
