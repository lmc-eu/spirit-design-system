import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalHeader from '../ModalHeader';

describe('Modal', () => {
  classNamePrefixProviderTest(ModalHeader, 'Modal__header');

  stylePropsTest(ModalHeader);

  restPropsTest(ModalHeader, 'div');
});
