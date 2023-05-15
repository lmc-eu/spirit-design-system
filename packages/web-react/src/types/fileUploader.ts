import { MutableRefObject, ReactNode } from 'react';
import {
  SpiritButtonElementProps,
  SpiritDivElementProps,
  SpiritInputElementProps,
  SpiritLItemElementProps,
  SpiritUListElementProps,
  Validation,
  ValidationTextType,
} from './shared';

export type FileUploaderAttachmentComponentType = (props: FileUploaderAttachmentBaseProps) => ReactNode;
export type FileQueueMapType = Map<string, File>;
export type FileUploaderErrorCallbackType = (error: string) => void;

export interface FileUploaderTextProps {
  helperText?: string;
  labelText?: string;
  linkText?: string;
}

export interface FileUploaderHandlingProps {
  addToQueue: (key: string, file: File) => FileQueueMapType;
  clearQueue: () => void;
  fileQueue: FileQueueMapType;
  onDismiss: (key: string) => FileQueueMapType;
}

export interface FileUploaderErrorMessagesProps {
  errorMessages?: {
    errorFileDuplicity: string;
    errorFileNotSupported: string;
    errorMaxFileSize: string;
    errorMaxUploadedFiles: string;
  };
}

export interface FileUploaderIntermediateProps {
  iconName?: string;
  isMultiple?: boolean;
  maxFileSize?: number;
  maxUploadedFiles?: number;
  validationText?: ValidationTextType;
}

export interface AttachmentDismissButtonBaseProps extends SpiritButtonElementProps {}

export interface FileUploaderInputBaseProps
  extends Omit<SpiritInputElementProps, 'onError'>,
    FileUploaderIntermediateProps,
    FileUploaderTextProps,
    Validation {
  dropZoneRef?: MutableRefObject<HTMLDivElement>;
  id: string;
  inputRef?: MutableRefObject<HTMLInputElement>;
  // isDisabled?: boolean;
  label?: string;
  name: string;
  onError?: FileUploaderErrorCallbackType;
}

export interface FileUploaderListBaseProps extends SpiritUListElementProps {
  attachmentComponent: FileUploaderAttachmentComponentType;
  id: string;
  inputName: string;
  label?: string;
}

export interface FileUploaderAttachmentBaseProps extends Omit<SpiritLItemElementProps, 'onError'> {
  buttonLabel?: string;
  file: File;
  iconName?: string;
  id: string;
  label: string;
  name: string;
  onDismiss: (key: string) => FileQueueMapType;
  onError?: FileUploaderErrorCallbackType;
}

export interface FileUploaderBaseProps extends SpiritDivElementProps, Partial<FileUploaderErrorMessagesProps> {
  id: string;
  // isDisabled?: boolean;
}

export interface UncontrolledFileUploaderBaseProps
  extends Omit<FileUploaderBaseProps, 'onChange'>,
    FileUploaderIntermediateProps {
  attachmentComponent: FileUploaderAttachmentComponentType;
  inputId: string;
  inputLabel: string;
  inputName: string;
  inputProps?: Partial<FileUploaderInputBaseProps>;
  listId: string;
  listProps?: Partial<FileUploaderListBaseProps>;
  onChange?: (fileQueue: FileQueueMapType) => void;
  onInputError?: FileUploaderErrorCallbackType;
}

export interface SpiritAttachmentDismissButtonProps extends AttachmentDismissButtonBaseProps {}

export interface SpiritFileUploaderInputProps extends FileUploaderInputBaseProps {}

export interface SpiritFileUploaderListProps extends FileUploaderListBaseProps {}

export interface SpiritFileUploaderAttachmentProps extends FileUploaderAttachmentBaseProps {}

export interface SpiritFileUploaderProps extends FileUploaderBaseProps, FileUploaderHandlingProps {}

export interface SpiritUncontrolledFileUploaderProps
  extends UncontrolledFileUploaderBaseProps,
    FileUploaderTextProps,
    Validation {}
