import React, { useEffect } from 'react';
import { SpiritFileUploaderAttachmentProps } from '../../../types';
import { FileUploader, FileUploaderAttachment, FileUploaderInput, FileUploaderList, useFileQueue } from '..';

const FileUploaderDraggingNotAvailable = () => {
  const { fileQueue, addToQueue, clearQueue, onDismiss, findInQueue, updateQueue } = useFileQueue();

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  useEffect(() => {
    const element = document.getElementById('fileUploaderDraggingNotAvailable')?.querySelector('.has-drag-and-drop');
    element?.classList.remove('has-drag-and-drop');
  }, []);

  // ⚠️ VISUAL EXAMPLE ONLY, DO NOT COPY-PASTE
  return (
    <FileUploader
      addToQueue={addToQueue}
      clearQueue={clearQueue}
      fileQueue={fileQueue}
      findInQueue={findInQueue}
      id="fileUploaderDraggingNotAvailable"
      onDismiss={onDismiss}
      updateQueue={updateQueue}
    >
      <FileUploaderInput
        helperText="Max file size is 10 MB"
        id="fileUploaderDraggingNotAvailableInput"
        label="Label"
        labelText="or drag and drop here"
        linkText="Upload your file"
        name="attachments"
        /* eslint-disable-next-line no-console */
        onError={(error) => console.error('My error log', error)}
      />
      <FileUploaderList
        attachmentComponent={attachmentComponent}
        id="fileUploaderDraggingNotAvailableAttachment"
        inputName="attachments"
        label="Attachments"
      />
    </FileUploader>
  );
};

export default FileUploaderDraggingNotAvailable;
