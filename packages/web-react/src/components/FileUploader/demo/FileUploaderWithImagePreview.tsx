import React from 'react';
import { SpiritFileUploaderAttachmentProps } from '../../../types';
import FileUploader from '../FileUploader';
import FileUploaderInput from '../FileUploaderInput';
import FileUploaderList from '../FileUploaderList';
import FileUploaderAttachment from '../FileUploaderAttachment';
import { useFileQueue } from '../useFileQueue';

const Story = () => {
  const { fileQueue, addToQueue, clearQueue, onDismiss, findInQueue, updateQueue } = useFileQueue();

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment
      key={id}
      id={id}
      onEdit={() => {
        alert('Edit action');
      }}
      {...props}
    />
  );

  return (
    <>
      <p>
        <small>Here is an example with `hasImagePreview` and `onEdit` attributes and only images are allowed</small>
      </p>
      <FileUploader
        id="fileUploaderImagePreviewExample"
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
          accept=".png,image/jpeg"
          maxUploadedFiles={1}
          /* eslint-disable-next-line no-console */
          onError={(error) => console.error(error)}
          isMultiple
        />
        <FileUploaderList
          id="fileUploaderExampleList"
          label="Attachments"
          inputName="attachments"
          attachmentComponent={attachmentComponent}
          hasImagePreview
        />
      </FileUploader>
    </>
  );
};

export default Story;
