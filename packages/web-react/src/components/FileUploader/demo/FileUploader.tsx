import React from 'react';
import { FileUploaderBaseProps, SpiritFileUploaderAttachmentProps } from '../../../types';
import FileUploader from '../FileUploader';
import FileUploaderAttachment from '../FileUploaderAttachment';
import FileUploaderInput from '../FileUploaderInput';
import FileUploaderList from '../FileUploaderList';
import { useFileQueue } from '../useFileQueue';

const Story = (args: FileUploaderBaseProps) => {
  const { fileQueue, addToQueue, clearQueue, onDismiss, findInQueue, updateQueue } = useFileQueue();

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  return (
    <FileUploader
      {...args}
      id="fileUploaderExample"
      onDismiss={onDismiss}
      fileQueue={fileQueue}
      addToQueue={addToQueue}
      clearQueue={clearQueue}
      findInQueue={findInQueue}
      updateQueue={updateQueue}
    >
      <FileUploaderInput
        id="fileUploaderExampleInput"
        name="attachments"
        label="Label"
        linkText="Upload your file(s)"
        labelText="or drag and drop here"
        helperText="Max file size is 10 MB"
        validationText="Validation message"
        maxUploadedFiles={2}
        /* eslint-disable-next-line no-console */
        onError={(error) => console.error('My error log', error)}
        isMultiple
      />
      <FileUploaderList
        id="fileUploaderExampleList"
        label="Attachments"
        inputName="attachments"
        attachmentComponent={attachmentComponent}
      />
    </FileUploader>
  );
};

export default Story;
