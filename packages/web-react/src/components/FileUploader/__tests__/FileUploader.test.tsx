import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import FileUploader from '../FileUploader';

jest.mock('../../../hooks/useIcon');

describe('FileUploader', () => {
  classNamePrefixProviderTest(FileUploader, 'FileUploader');

  stylePropsTest((props) => <FileUploader {...props} />);

  restPropsTest(FileUploader, 'div');
});
