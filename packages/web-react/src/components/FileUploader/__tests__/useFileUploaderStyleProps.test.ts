import { renderHook } from '@testing-library/react-hooks';
import { useFileUploaderStyleProps } from '../useFileUploaderStyleProps';

describe('useFileUploaderStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() =>
      useFileUploaderStyleProps({
        isDropZoneHidden: true,
        isDragAndDropSupported: true,
        isDragging: true,
        queueLimitBehavior: 'hide',
      }),
    );

    expect(result.current.classProps).toBeDefined();
    expect(result.current.classProps.root).toBe('FileUploader');
    expect(result.current.classProps.input).toBeDefined();
    expect(result.current.classProps.input.root).toBe('FileUploaderInput has-drag-and-drop is-dragging d-none');
    expect(result.current.classProps.input.label).toBe('FileUploaderInput__label');
    expect(result.current.classProps.input.input).toBe('FileUploaderInput__input');
    expect(result.current.classProps.input.dropLabel).toBe('FileUploaderInput__dragAndDropLabel');
    expect(result.current.classProps.input.helper).toBe('FileUploaderInput__helperText');
    expect(result.current.classProps.input.link).toBe('FileUploaderInput__link link-primary link-underlined');
    expect(result.current.classProps.input.validationText).toBe('FileUploaderInput__validationText');
    expect(result.current.classProps.input.dropZone).toBeDefined();
    expect(result.current.classProps.input.dropZone.root).toBe('FileUploaderInput__dropZone');
    expect(result.current.classProps.input.dropZone.label).toBe('FileUploaderInput__dropZoneLabel');
    expect(result.current.classProps.list).toBe('FileUploaderList');
    expect(result.current.classProps.attachment).toBeDefined();
    expect(result.current.classProps.attachment.root).toBe('FileUploaderAttachment');
    expect(result.current.classProps.attachment.button).toBe('FileUploaderAttachment__action');
    expect(result.current.classProps.attachment.image).toBe('FileUploaderAttachment__image');
  });

  it('should return disabled', () => {
    const { result } = renderHook(() =>
      useFileUploaderStyleProps({
        isDisabled: true,
      }),
    );

    expect(result.current.classProps.input.root).toBe('FileUploaderInput FileUploaderInput--disabled');
  });

  it('should return disabled based on queue limit', () => {
    const { result } = renderHook(() =>
      useFileUploaderStyleProps({
        isDisabledByQueueLimitBehavior: true,
        queueLimitBehavior: 'disable',
      }),
    );

    expect(result.current.classProps.input.root).toBe('FileUploaderInput FileUploaderInput--disabled');
  });

  it('should have CSS for crop image', () => {
    const { result } = renderHook(() =>
      useFileUploaderStyleProps({
        meta: { x: 1, y: 2, width: 3, height: 4 },
      }),
    );

    expect(result.current.classProps.imageCropStyles).toBeDefined();
  });
});
