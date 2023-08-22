/* eslint-disable no-console */
import React, { createRef, useState, FormEvent, MutableRefObject } from 'react';
import { SpiritFileUploaderAttachmentProps, FileQueueMapType, ValidationState } from '../../../types';
import UncontrolledFileUploader from '../UncontrolledFileUploader';
import FileUploaderAttachment from '../FileUploaderAttachment';
import { Button } from '../../Button';

const Story = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [validationText, setValidationText] = useState<string | undefined>(undefined);
  const [validationState, setValidationState] = useState<ValidationState | undefined>(undefined);
  const [queue, setQueue] = useState<FileQueueMapType>(new Map());

  const inputReference = createRef() as MutableRefObject<HTMLInputElement>;
  const dropZoneReference = createRef() as MutableRefObject<HTMLDivElement>;

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  const changeHandler = (fileQueue: FileQueueMapType) => {
    setQueue(fileQueue);
    console.log('change handler ...', fileQueue);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const master = new Map(queue);

    setSubmitting(true);
    console.log('inputReference', inputReference);
    console.log('dropZoneReference', dropZoneReference);

    setTimeout(() => {
      console.info('form data', master, event);
      setSubmitting(false);
      setSubmitted(true);

      queue.clear();
      setQueue(new Map(queue));
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
      <UncontrolledFileUploader
        attachmentComponent={attachmentComponent}
        id="fileUploaderUncontrolled"
        inputId="fileUploaderUncontrolledInput"
        inputName="attachments"
        inputLabel="Input label"
        inputProps={{
          inputRef: inputReference,
          dropZoneRef: dropZoneReference,
        }}
        listId="fileUploaderUncontrolledList"
        linkText="Upload your file(s)"
        labelText="or drag and drop here"
        helperText="Max file size is 10 MB"
        onChange={changeHandler}
        onInputError={errorHandler}
        validationState={validationState}
        validationText={validationText}
        isMultiple
      />
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
