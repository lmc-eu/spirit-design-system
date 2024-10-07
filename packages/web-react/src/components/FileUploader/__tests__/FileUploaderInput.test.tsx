import { render, screen } from '@testing-library/react';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { validationTextPropsTest } from '../../../../tests/providerTests/validationTextPropsTest';
import FileUploaderInput from '../FileUploaderInput';
import '@testing-library/jest-dom';

describe('FileUploaderInput', () => {
  classNamePrefixProviderTest(FileUploaderInput, 'FileUploaderInput');

  restPropsTest(FileUploaderInput, 'div');

  validationTextPropsTest(FileUploaderInput, '.FileUploaderInput__validationText');

  it('should have drag-and-drop class in Client component', () => {
    render(<FileUploaderInput id="test-uploader" name="test-uploader" label="upload" data-testid="test" />);

    const dropZone = screen.getAllByTestId('test')[0];

    expect(dropZone).toHaveClass('has-drag-and-drop');
  });

  it('should not have drag-and-drop class in Server component', () => {
    const container = renderToString(
      <FileUploaderInput id="test-uploader" name="test-uploader" label="upload" data-testid="test" />,
    );

    expect(container).not.toContain('has-drag-and-drop');
  });
});
