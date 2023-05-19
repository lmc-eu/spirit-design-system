import React from 'react';
import classNames from 'classnames';
import { SpiritFileUploaderInputProps } from '../../types';
import { useStyleProps } from '../../hooks';
import { useValidationText } from '../Field';
import { DEFAULT_FILE_QUEUE_LIMIT, DEFAULT_FILE_SIZE_LIMIT } from './constants';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';
import { useFileUploaderInput } from './useFileUploaderInput';
import { Icon } from '../Icon';

const FileUploaderInput = (props: SpiritFileUploaderInputProps) => {
  const {
    accept,
    dropZoneRef,
    helperText,
    iconName = 'upload',
    id,
    inputRef,
    // isDisabled,
    queueLimitBehavior = 'none',
    isMultiple,
    isRequired,
    label,
    labelText,
    linkText,
    maxFileSize = DEFAULT_FILE_SIZE_LIMIT,
    maxUploadedFiles = DEFAULT_FILE_QUEUE_LIMIT,
    onError,
    validationState,
    validationText,
    ...restProps
  } = props;

  const isDragAndDropSupported = 'draggable' in document.createElement('span');

  const { isDragging, isDropZoneHidden, onChange, onDragOver, onDragEnter, onDragLeave, onDrop } = useFileUploaderInput(
    {
      accept,
      maxFileSize,
      maxUploadedFiles,
      isMultiple,
      queueLimitBehavior,
      onError,
    },
  );
  const { classProps } = useFileUploaderStyleProps({
    isDragAndDropSupported,
    // isDisabled,
    isDropZoneHidden,
    isDragging,
    isRequired,
    queueLimitBehavior,
    validationState,
  });
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const renderValidationText = useValidationText({
    validationTextClassName: classProps.input.validationText,
    validationState,
    validationText,
  });

  return (
    <div
      {...transferProps}
      {...styleProps}
      onDragOver={isDragAndDropSupported ? onDragOver : undefined}
      onDragEnter={isDragAndDropSupported ? onDragEnter : undefined}
      onDragLeave={isDragAndDropSupported ? onDragLeave : undefined}
      onDrop={isDragAndDropSupported ? onDrop : undefined}
      className={classNames(classProps.input.root, styleProps.className)}
    >
      <label htmlFor={id} className={classProps.input.label}>
        {label}
      </label>
      <input
        type="file"
        accept={accept}
        id={id}
        ref={inputRef}
        className={classProps.input.input}
        onChange={onChange}
        multiple={isMultiple}
        required={isRequired}
        {...restProps}
      />
      <div ref={dropZoneRef} className={classProps.input.dropZone.root}>
        <Icon name={iconName} aria-hidden="true" />
        <label htmlFor={id} className={classProps.input.dropZone.label}>
          <span className={classProps.input.link}>{linkText}</span>
          &nbsp;
          <span className={classProps.input.dropLabel}>{labelText}</span>
        </label>
        <div className={classProps.input.helper}>{helperText}</div>
      </div>
      {renderValidationText}
    </div>
  );
};

export default FileUploaderInput;
