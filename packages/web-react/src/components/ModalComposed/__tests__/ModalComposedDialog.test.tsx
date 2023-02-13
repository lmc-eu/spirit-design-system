import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalComposedDialog from '../ModalComposedDialog';

describe('ModalComposedDialog', () => {
  classNamePrefixProviderTest(ModalComposedDialog, 'ModalDialog');

  stylePropsTest(ModalComposedDialog);

  restPropsTest(ModalComposedDialog, 'article');
});
