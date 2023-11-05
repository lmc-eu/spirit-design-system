import { RefObject } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks';
import { FileMetadata } from '../../types/fileUploader';
import { getAttachmentInput, getAttachmentMetaInput } from './utils';

export interface UseFileUploaderAttachmentProps {
  attachmentRef: RefObject<HTMLLIElement>;
  file: File;
  meta?: FileMetadata;
  name: string;
  onError?: (error: string) => void;
}

export const useFileUploaderAttachment = ({
  attachmentRef,
  file,
  name,
  meta,
  onError,
}: UseFileUploaderAttachmentProps) => {
  useIsomorphicLayoutEffect(() => {
    const createAttachmentInput = (metadata: FileMetadata) => {
      attachmentRef.current?.querySelectorAll('input').forEach((element) => element.remove());
      const attachmentInputElement = getAttachmentInput(file, name, onError);
      attachmentInputElement && attachmentRef.current?.appendChild(attachmentInputElement);

      if (metadata) {
        const attachmentInputMetaElement = getAttachmentMetaInput(file, name, metadata);
        attachmentRef.current?.appendChild(attachmentInputMetaElement);
      }
    };

    meta && createAttachmentInput(meta);
  }, [attachmentRef, file, name, meta, onError]);
};
