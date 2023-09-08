import React from 'react';
import { SpiritFileUploaderAttachmentProps } from '../../../types';
import { FileUploader, FileUploaderAttachment, FileUploaderInput, FileUploaderList, useFileQueue } from '..';

const FileUploaderAttachmentWithImagePreview = () => {
  const { fileQueue, addToQueue, clearQueue, onDismiss, findInQueue, updateQueue } = useFileQueue();

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment
      key={id}
      id={id}
      onEdit={() => {
        alert('edit');
      }}
      {...props}
    />
  );

  return (
    <FileUploader
      addToQueue={addToQueue}
      clearQueue={clearQueue}
      fileQueue={fileQueue}
      findInQueue={findInQueue}
      id="fileUploaderAttachmentWithImagePreview"
      onDismiss={onDismiss}
      updateQueue={updateQueue}
    >
      <FileUploaderInput
        helperText="Max size of each file is 10 MB"
        id="fileUploaderAttachmentWithImagePreviewInput"
        label="Label"
        labelText="or drag and drop here"
        linkText="Upload your file(s)"
        name="attachments"
        /* eslint-disable-next-line no-console */
        onError={(error) => console.error('My error log', error)}
      />
      <FileUploaderList
        attachmentComponent={attachmentComponent}
        id="fileUploaderAttachmentWithImagePreviewAttachment"
        inputName="attachments"
        label="Attachments"
        hasImagePreview
      />
    </FileUploader>
  );
};

export default FileUploaderAttachmentWithImagePreview;
