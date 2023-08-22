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
      id="fileUploaderExampleFluid"
      onDismiss={onDismiss}
      fileQueue={fileQueue}
      addToQueue={addToQueue}
      clearQueue={clearQueue}
      findInQueue={findInQueue}
      updateQueue={updateQueue}
      isFluid
    >
      <FileUploaderInput
        id="fileUploaderExampleFluidInput"
        name="attachments"
        label="Label"
        linkText="Upload your file"
        labelText="or drag and drop here"
        helperText="Max file size is 10 MB"
        validationText="Validation message"
        /* eslint-disable-next-line no-console */
        onError={(error) => console.error('My error log', error)}
        queueLimitBehavior="hide"
      />
      <FileUploaderList
        id="fileUploaderExampleFluidList"
        label="Attachments"
        inputName="attachments"
        attachmentComponent={attachmentComponent}
      />
    </FileUploader>
  );
};

export default Story;
