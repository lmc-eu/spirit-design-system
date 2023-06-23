import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalDialog from '../ModalDialog';

describe('ModalDialog', () => {
  classNamePrefixProviderTest(ModalDialog, 'ModalDialog');

  stylePropsTest(ModalDialog);

  restPropsTest(ModalDialog, 'article');
});
