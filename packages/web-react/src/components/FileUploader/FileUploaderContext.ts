'use client';

import { createContext, useContext } from 'react';
import { FileUploaderHandlingProps, FileUploaderErrorMessagesProps } from '../../types';

export interface FileUploaderContextProps extends FileUploaderHandlingProps, FileUploaderErrorMessagesProps {}

const defaultContext: FileUploaderContextProps = {
  addToQueue: () => new Map(),
  clearQueue: () => null,
  fileQueue: new Map(),
  onDismiss: () => new Map(),
  findInQueue: () => null,
  updateQueue: () => new Map(),
  errorMessages: {
    errorFileDuplicity: '',
    errorFileNotSupported: '',
    errorMaxFileSize: '',
    errorMaxUploadedFiles: '',
  },
};

const FileUploaderContext = createContext<FileUploaderContextProps>(defaultContext);
const FileUploaderProvider = FileUploaderContext.Provider;
const FileUploaderConsumer = FileUploaderContext.Consumer;
const useFileUploaderContext = (): FileUploaderContextProps => useContext(FileUploaderContext);

export default FileUploaderContext;
export { FileUploaderProvider, FileUploaderConsumer, useFileUploaderContext };
