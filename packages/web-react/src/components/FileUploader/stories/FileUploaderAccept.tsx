import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import { SpiritFileUploaderAttachmentProps } from '../../../types';
import FileUploader from '../FileUploader';
import FileUploaderInput from '../FileUploaderInput';
import FileUploaderList from '../FileUploaderList';
import FileUploaderAttachment from '../FileUploaderAttachment';

const Story: ComponentStory<typeof FileUploader> = () => {
  const [queue, setQueue] = useState<Map<string, File>>(new Map());

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  const onDismissHandler = (name: string) => {
    setQueue((prev) => {
      const newState = new Map(prev);
      newState.delete(name);

      return newState;
    });

    return queue;
  };

  const addToQueueHandler = (key: string, file: File) => {
    setQueue(new Map(queue.set(key, file)));

    return queue;
  };

  const clearQueueHandler = () => {
    queue.clear();
    setQueue(new Map(queue));
  };

  return (
    <>
      <p>
        <small>Here is an example with `accept` attribute and only images are allowed</small>
      </p>
      <FileUploader
        id="fileUploaderAcceptExample"
        onDismiss={onDismissHandler}
        fileQueue={queue}
        addToQueue={addToQueueHandler}
        clearQueue={clearQueueHandler}
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
          maxUploadedFiles={5}
          /* eslint-disable-next-line no-console */
          onError={(error) => console.error(error)}
          isMultiple
        />
        <FileUploaderList
          id="fileUploaderExampleList"
          label="Attachments"
          inputName="attachments"
          attachmentComponent={attachmentComponent}
        />
      </FileUploader>
    </>
  );
};

export default Story;
