/* eslint-disable no-console */
import React, { createRef, useState, FormEvent, MutableRefObject } from 'react';
import { SpiritFileUploaderAttachmentProps, ValidationState } from '../../../types';
import { useFileQueue } from '../useFileQueue';
import FileUploader from '../FileUploader';
import FileUploaderInput from '../FileUploaderInput';
import FileUploaderList from '../FileUploaderList';
import FileUploaderAttachment from '../FileUploaderAttachment';
import { Button } from '../../Button';

const Story = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [validationText, setValidationText] = useState<string | undefined>(undefined);
  const [validationState, setValidationState] = useState<ValidationState | undefined>(undefined);

  const { fileQueue, addToQueue, clearQueue, onDismiss } = useFileQueue();

  const inputReference = createRef() as MutableRefObject<HTMLInputElement>;
  const dropZoneReference = createRef() as MutableRefObject<HTMLDivElement>;

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const master = new Map(fileQueue);

    setSubmitting(true);
    console.log('inputReference', inputReference);
    console.log('dropZoneReference', dropZoneReference);

    setTimeout(() => {
      console.info('form data', master, event);
      setSubmitting(false);
      setSubmitted(true);
      clearQueue();
    }, 2500);
  };

  const errorHandler = (error: string | Error) => {
    console.error(error);
    setValidationState('danger');
    setValidationText(String(error));

    setTimeout(() => {
      setValidationState(undefined);
      setValidationText(undefined);
    }, 5000);
  };

  const resetStateHandler = () => {
    setValidationState(undefined);
    setValidationText(undefined);
    setSubmitted(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>
        <small>
          When you open your console in a browser, you can see the changes as you send or add/remove items from the
          queue.
        </small>
      </p>
      <FileUploader
        id="fileUploaderFormExample"
        onDismiss={onDismiss}
        fileQueue={fileQueue}
        addToQueue={addToQueue}
        clearQueue={clearQueue}
      >
        <FileUploaderInput
          id="fileUploaderFormExampleInput"
          inputRef={inputReference}
          name="attachments"
          label="Label"
          linkText="Upload your file(s)"
          labelText="or drag and drop here"
          helperText="Max file size is 10 MB"
          validationText={validationText}
          validationState={validationState}
          maxUploadedFiles={2}
          onError={errorHandler}
          isMultiple
        />
        <FileUploaderList
          id="fileUploaderFormExampleList"
          label="Attachments"
          inputName="attachments"
          attachmentComponent={attachmentComponent}
        />
      </FileUploader>
      <div style={{ paddingTop: '1rem' }}>
        <Button type="submit" color="primary" isDisabled={submitting || submitted}>
          Submit form to show data
        </Button>
        {submitted && (
          <Button color="secondary" onClick={resetStateHandler} UNSAFE_style={{ marginLeft: '.5rem' }}>
            Reset state
          </Button>
        )}
      </div>
    </form>
  );
};

export default Story;
