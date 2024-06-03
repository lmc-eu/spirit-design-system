import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import FileUploader from '../FileUploader';

describe('FileUploader', () => {
  classNamePrefixProviderTest(FileUploader, 'FileUploader');

  stylePropsTest((props) => <FileUploader {...props} />);

  restPropsTest(FileUploader, 'div');
});
