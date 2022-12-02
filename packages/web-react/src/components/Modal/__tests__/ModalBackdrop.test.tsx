import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalBackdrop from '../ModalBackdrop';

describe('Modal', () => {
  classNamePrefixProviderTest(ModalBackdrop, 'Modal__backdrop');

  stylePropsTest(ModalBackdrop);

  restPropsTest(ModalBackdrop, 'div');
});
