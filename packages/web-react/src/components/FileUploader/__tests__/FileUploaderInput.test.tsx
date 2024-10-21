import { render, screen, act } from '@testing-library/react';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { validationTextPropsTest } from '../../../../tests/providerTests/validationTextPropsTest';
import FileUploaderInput from '../FileUploaderInput';
import '@testing-library/jest-dom';

describe('FileUploaderInput', () => {
  classNamePrefixProviderTest(FileUploaderInput, 'FileUploaderInput');

  restPropsTest(FileUploaderInput, 'div');

  validationTextPropsTest(FileUploaderInput, '.FileUploaderInput__validationText');

  it('should have drag-and-drop listeners in CSR when draggable is supported', () => {
    render(<FileUploaderInput id="test-uploader" name="test-uploader" label="upload" />);

    const dropZone = screen.getByLabelText(/upload/i).parentElement;

    expect(dropZone).toHaveAttribute('ondragover');
    expect(dropZone).toHaveAttribute('ondragenter');
    expect(dropZone).toHaveAttribute('ondragleave');
    expect(dropZone).toHaveAttribute('ondrop');
  });

  it('should not have drag-and-drop listeners in SSR', () => {
    const ui = <FileUploaderInput id="test-uploader" name="test-uploader" label="upload" />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = ReactDOMServer.renderToString(ui);

    act(() => {
      render(ui, { hydrate: true, container });
    });

    const dropZone = screen.getByLabelText(/upload/i).parentElement;

    expect(dropZone).not.toHaveAttribute('ondragover');
    expect(dropZone).not.toHaveAttribute('ondragenter');
    expect(dropZone).not.toHaveAttribute('ondragleave');
    expect(dropZone).not.toHaveAttribute('ondrop');
  });
});
