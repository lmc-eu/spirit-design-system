import React from 'react';
import { SpiritFileUploaderAttachmentProps } from '../../../types';
import { FileUploader, FileUploaderAttachment, FileUploaderInput, FileUploaderList, useFileQueue } from '..';

const FileUploaderInputMultipleWithFileQueueBehaviorControl = () => {
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
      id="fileUploaderMultipleWithQueueBehaviorControl"
      onDismiss={onDismiss}
      updateQueue={updateQueue}
    >
      <FileUploaderInput
        accept=".png,image/jpeg"
        helperText="Max size of each file is 10 MB"
        id="fileUploaderMultipleWithQueueBehaviorControlInput"
        isMultiple
        label="Label"
        labelText="or drag and drop here"
        linkText="Upload your file(s)"
        maxUploadedFiles={2}
        name="attachments"
        /* eslint-disable-next-line no-console */
        onError={(error) => console.error('My error log', error)}
        queueLimitBehavior="hide"
      />
      <FileUploaderList
        attachmentComponent={attachmentComponent}
        id="fileUploaderMultipleWithQueueBehaviorControlAttachment"
        inputName="attachments"
        label="Attachments"
      />
    </FileUploader>
  );
};

export default FileUploaderInputMultipleWithFileQueueBehaviorControl;
