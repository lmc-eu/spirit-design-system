import { RefObject, useEffect } from 'react';
import { getAttachmentInput } from './utils';

export interface UseFileUploaderAttachmentProps {
  attachmentRef: RefObject<HTMLLIElement>;
  file: File;
  name: string;
  onError?: (error: string) => void;
}

export const useFileUploaderAttachment = ({ attachmentRef, file, name, onError }: UseFileUploaderAttachmentProps) => {
  const createAttachmentInput = () => {
    const attachmentInputElement = getAttachmentInput(file, name, onError) as Node;

    attachmentRef.current?.appendChild(attachmentInputElement);
  };

  useEffect(() => {
    createAttachmentInput();

    /* We want to call this hook only once */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
