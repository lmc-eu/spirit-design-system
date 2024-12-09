import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import FileUploader from '../FileUploader';

jest.mock('../../../hooks', () => {
  return {
    ...jest.requireActual('../../../hooks'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useIcon: (name: string) => '',
  };
});

describe('FileUploader', () => {
  classNamePrefixProviderTest(FileUploader, 'FileUploader');

  stylePropsTest((props) => <FileUploader {...props} />);

  restPropsTest(FileUploader, 'div');
});
