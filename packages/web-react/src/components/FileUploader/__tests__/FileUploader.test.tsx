import '@testing-library/jest-dom';
import React from 'react';
import { useIconMock, classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import FileUploader from '../FileUploader';

jest.mock('../../../hooks', () => useIconMock);

describe('FileUploader', () => {
  classNamePrefixProviderTest(FileUploader, 'FileUploader');

  stylePropsTest((props) => <FileUploader {...props} />);

  restPropsTest(FileUploader, 'div');
});
