import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { validationTextPropsTest } from '../../../../tests/providerTests/validationTextPropsTest';
import FileUploaderInput from '../FileUploaderInput';

describe('FileUploaderInput', () => {
  classNamePrefixProviderTest(FileUploaderInput, 'FileUploaderInput');

  restPropsTest(FileUploaderInput, 'div');

  validationTextPropsTest(FileUploaderInput, '.FileUploaderInput__validationText');
});
