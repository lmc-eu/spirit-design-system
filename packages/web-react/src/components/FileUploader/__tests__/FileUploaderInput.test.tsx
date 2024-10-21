import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
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
    render(<FileUploaderInput id="test-uploader" name="test-uploader" label="upload" data-testid="test" />);

    const dropZone = screen.getAllByTestId('test')[0];

    expect(dropZone).toHaveClass('has-drag-and-drop');
  });

  it('should not have drag-and-drop listeners in SSR', () => {
    const ui = <FileUploaderInput id="test-uploader" name="test-uploader" label="upload" data-testid="test" />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = ReactDOMServer.renderToString(ui);

    act(() => {
      render(ui, { hydrate: true, container });
    });

    const dropZone = screen.getAllByTestId('test')[0];

    expect(dropZone).not.toHaveClass('has-drag-and-drop');
  });
});

describe('Listener approach', () => {
  it('should not register onDragOver event listener during SSR', () => {
    // Simulace addEventListener pomocí jest.spyOn
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');

    // Simulujeme SSR renderováním pouze komponenty bez vykonání useEffect
    // Abychom simulovali SSR, renderování komponenty nebude obsahovat "hydration" logiku.
    render(<FileUploaderInput name="bagr" id="pokus" data-testid="test" />, { hydrate: false });

    // Ověřujeme, že event listener nebyl zaregistrován
    expect(addEventListenerSpy).not.toHaveBeenCalledWith('dragover', expect.any(Function));

    // Vyčistíme spy
    addEventListenerSpy.mockRestore();
  });

  it('should register onDragOver event listener during CSR', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');

    // Simulujeme CSR renderováním komponenty s vykonáním useEffect
    render(<FileUploaderInput name="bagr" id="pokus" data-testid="test" />, { hydrate: true });

    expect(addEventListenerSpy).toHaveBeenCalledWith('dragover', expect.any(Function));

    addEventListenerSpy.mockRestore();
  });
});

describe('mock useEffect approach', () => {
  it('should not register onDragOver event listener during SSR', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(() => {});
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

    // Simulujeme SSR renderování komponenty
    render(<FileUploaderInput name="bagr" id="pokus" data-testid="test" />);

    // Kontrolujeme, že během SSR nebyl zaregistrován žádný onDragOver listener
    expect(addEventListenerSpy).not.toHaveBeenCalledWith('dragover', expect.any(Function));

    addEventListenerSpy.mockRestore();
  });

  it('should register onDragOver event listener during CSR', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

    // Simulujeme CSR renderování komponenty
    render(<FileUploaderInput name="bagr" id="pokus" data-testid="test" />);

    // Kontrolujeme, že během CSR byl zaregistrován onDragOver listener
    expect(addEventListenerSpy).toHaveBeenCalledWith('dragover', expect.any(Function));

    addEventListenerSpy.mockRestore();
  });
});

describe('is-dragging class onDragOver event', () => {
  it('should have is-dragging class on dragOver', () => {
    render(<FileUploaderInput name="bagr" id="pokus" data-testid="test" />);
    const dropZone = screen.getAllByTestId('test')[0];

    fireEvent.dragOver(dropZone);

    waitFor(() => {
      expect(dropZone).toHaveClass('is-dragging');
    });
  });
});
