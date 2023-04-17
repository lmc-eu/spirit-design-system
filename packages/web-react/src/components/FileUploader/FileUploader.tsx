import React from 'react';
import classNames from 'classnames';
import { SpiritFileUploaderProps } from '../../types';
import { useStyleProps } from '../../hooks';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';
import { FileUploaderProvider } from './FileUploaderContext';
import {
  DEFAULT_ERROR_MESSAGE_MAX_FILE_SIZE,
  DEFAULT_ERROR_MESSAGE_QUEUE_DUPLICITY,
  DEFAULT_ERROR_MESSAGE_QUEUE_LIMIT,
  DEFAULT_ERROR_MESSAGE_UNSUPPORTED_FILE,
} from './constants';

const FileUploader = (props: SpiritFileUploaderProps) => {
  const { children, id, fileQueue, onDismiss, addToQueue, clearQueue, errorMessages, ...restProps } = props;

  const { classProps } = useFileUploaderStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const contextValue = {
    addToQueue,
    clearQueue,
    fileQueue,
    onDismiss,
    errorMessages: {
      errorFileDuplicity: DEFAULT_ERROR_MESSAGE_QUEUE_DUPLICITY,
      errorFileNotSupported: DEFAULT_ERROR_MESSAGE_UNSUPPORTED_FILE,
      errorMaxFileSize: DEFAULT_ERROR_MESSAGE_MAX_FILE_SIZE,
      errorMaxUploadedFiles: DEFAULT_ERROR_MESSAGE_QUEUE_LIMIT,
      ...errorMessages,
    },
  };

  return (
    <FileUploaderProvider value={contextValue}>
      <div id={id} {...transferProps} {...styleProps} className={classNames(classProps.root, styleProps.className)}>
        {children}
      </div>
    </FileUploaderProvider>
  );
};

export default FileUploader;
