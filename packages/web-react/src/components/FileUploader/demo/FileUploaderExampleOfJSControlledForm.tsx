import React, { FormEvent, useState } from 'react';
import { SpiritFileUploaderAttachmentProps } from '../../../types';
import { Button } from '../../Button';
import { FileUploader, FileUploaderAttachment, FileUploaderInput, FileUploaderList, useFileQueue } from '..';

const FileUploaderExampleOfJSControlledForm = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { fileQueue, addToQueue, clearQueue, onDismiss, findInQueue, updateQueue } = useFileQueue();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* eslint-disable-next-line no-console */
    console.info('file queue', fileQueue);

    setSubmitting(true);

    setTimeout(() => {
      clearQueue();
      setSubmitting(false);
      /* eslint-disable-next-line no-console */
      console.log('file queue after submit', fileQueue);
    }, 250);
  };

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  return (
    <form onSubmit={submitHandler}>
      <FileUploader
        addToQueue={addToQueue}
        clearQueue={clearQueue}
        fileQueue={fileQueue}
        findInQueue={findInQueue}
        id="fileUploaderJSControlledForm"
        onDismiss={onDismiss}
        updateQueue={updateQueue}
      >
        <FileUploaderInput
          helperText="Max file size is 10 MB"
          id="fileUploaderJSControlledFormInput"
          label="Label"
          labelText="or drag and drop here"
          linkText="Upload your file"
          name="attachments"
          /* eslint-disable-next-line no-console */
          onError={(error) => console.error('My error log', error)}
        />
        <FileUploaderList
          attachmentComponent={attachmentComponent}
          id="fileUploaderJSControlledFormAttachment"
          inputName="attachments"
          label="Attachments"
        />
      </FileUploader>
      <div className="mt-600">
        <Button type="submit" color="primary" isDisabled={submitting}>
          Submit me
        </Button>
      </div>
    </form>
  );
};

export default FileUploaderExampleOfJSControlledForm;
