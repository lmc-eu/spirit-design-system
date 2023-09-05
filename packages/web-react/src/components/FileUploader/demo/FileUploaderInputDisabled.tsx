import React from 'react';
import { SpiritFileUploaderAttachmentProps } from '../../../types';
import { FileUploader, FileUploaderAttachment, FileUploaderInput, FileUploaderList, useFileQueue } from '..';

const FileUploaderInputDisabled = () => {
  const { fileQueue, addToQueue, clearQueue, onDismiss, findInQueue, updateQueue } = useFileQueue();

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  return (
    <FileUploader
      addToQueue={addToQueue}
      clearQueue={clearQueue}
      fileQueue={fileQueue}
      findInQueue={findInQueue}
      id="fileUploaderDisabled"
      onDismiss={onDismiss}
      updateQueue={updateQueue}
    >
      <FileUploaderInput
        helperText="Max file size is 10 MB"
        id="fileUploaderDisabledInput"
        label="Label"
        labelText="or drag and drop here"
        linkText="Upload your file"
        name="attachments"
        /* eslint-disable-next-line no-console */
        onError={(error) => console.error('My error log', error)}
        isDisabled
        isRequired
      />
      <FileUploaderList
        attachmentComponent={attachmentComponent}
        id="fileUploaderDisabledAttachment"
        inputName="attachments"
        label="Attachments"
      />
    </FileUploader>
  );
};

export default FileUploaderInputDisabled;
