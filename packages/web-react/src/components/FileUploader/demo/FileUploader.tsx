import React from 'react';
import { FileUploaderBaseProps, SpiritFileUploaderAttachmentProps } from '../../../types';
import { useFileQueue } from '../useFileQueue';
import FileUploader from '../FileUploader';
import FileUploaderInput from '../FileUploaderInput';
import FileUploaderList from '../FileUploaderList';
import FileUploaderAttachment from '../FileUploaderAttachment';

const Story = (args: FileUploaderBaseProps) => {
  const { fileQueue, addToQueue, clearQueue, onDismiss, findInQueue, updateQueue } = useFileQueue();

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  return (
    <FileUploader
      {...args}
      id="file-uploader-example"
      onDismiss={onDismiss}
      fileQueue={fileQueue}
      addToQueue={addToQueue}
      clearQueue={clearQueue}
      findInQueue={findInQueue}
      updateQueue={updateQueue}
    >
      <FileUploaderInput
        id="file-uploader-example-input"
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
        id="file-uploader-example-list"
        label="Attachments"
        inputName="attachments"
        attachmentComponent={attachmentComponent}
      />
    </FileUploader>
  );
};

export default Story;
