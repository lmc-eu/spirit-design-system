import { RefObject, useLayoutEffect } from 'react';
import { FileQueueValueMetaType } from '../../types/fileUploader';
import { getAttachmentInput, getAttachmentMetaInput } from './utils';

export interface UseFileUploaderAttachmentProps {
  attachmentRef: RefObject<HTMLLIElement>;
  file: File;
  meta?: FileQueueValueMetaType;
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
  useLayoutEffect(() => {
    const createAttachmentInput = (metadata: FileQueueValueMetaType) => {
      attachmentRef.current?.querySelectorAll('input').forEach((element) => element.remove());
      const attachmentInputElement = getAttachmentInput(file, name, onError) as Node;
      attachmentRef.current?.appendChild(attachmentInputElement);

      if (metadata) {
        const attachmentInputMetaElement = getAttachmentMetaInput(file, name, metadata) as Node;
        attachmentRef.current?.appendChild(attachmentInputMetaElement);
      }
    };

    meta && createAttachmentInput(meta);
  }, [attachmentRef, file, name, meta, onError]);
};
