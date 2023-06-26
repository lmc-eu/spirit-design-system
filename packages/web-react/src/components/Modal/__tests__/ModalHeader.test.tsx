import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalHeader from '../ModalHeader';

describe('ModalHeader', () => {
  classNamePrefixProviderTest(ModalHeader, 'ModalHeader');

  stylePropsTest(ModalHeader);

  restPropsTest(ModalHeader, 'header');
});
