import React from 'react';
import { SpiritFileUploaderAttachmentProps } from '../../../types';
import { FileUploader, FileUploaderAttachment, FileUploaderInput, FileUploaderList, useFileQueue } from '..';

const FileUploaderInputValidationStates = () => {
  const {
    fileQueue: fileQueueSuccess,
    addToQueue: addToQueueSuccess,
    clearQueue: clearQueueSuccess,
    onDismiss: onDismissSuccess,
    findInQueue: findInQueueSuccess,
    updateQueue: updateQueueSuccess,
  } = useFileQueue();

  const {
    fileQueue: fileQueueWarning,
    addToQueue: addToQueueWarning,
    clearQueue: clearQueueWarning,
    onDismiss: onDismissWarning,
    findInQueue: findInQueueWarning,
    updateQueue: updateQueueWarning,
  } = useFileQueue();

  const {
    fileQueue: fileQueueDanger,
    addToQueue: addToQueueDanger,
    clearQueue: clearQueueDanger,
    onDismiss: onDismissDanger,
    findInQueue: findInQueueDanger,
    updateQueue: updateQueueDanger,
  } = useFileQueue();

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  return (
    <>
      <FileUploader
        addToQueue={addToQueueSuccess}
        clearQueue={clearQueueSuccess}
        fileQueue={fileQueueSuccess}
        findInQueue={findInQueueSuccess}
        id="fileUploaderValidationStatesSuccess"
        onDismiss={onDismissSuccess}
        updateQueue={updateQueueSuccess}
      >
        <FileUploaderInput
          helperText="Max file size is 10 MB"
          id="fileUploaderValidationStatesSuccessInput"
          label="Label"
          labelText="or drag and drop here"
          linkText="Upload your file"
          name="attachmentsSuccess"
          /* eslint-disable-next-line no-console */
          onError={(error) => console.error('My error log', error)}
          validationText="Success validation text"
          validationState="success"
          isRequired
        />
        <FileUploaderList
          attachmentComponent={attachmentComponent}
          id="fileUploaderValidationStatesSuccessAttachment"
          inputName="attachmentsSuccess"
          label="Attachments"
        />
      </FileUploader>

      <FileUploader
        addToQueue={addToQueueWarning}
        clearQueue={clearQueueWarning}
        fileQueue={fileQueueWarning}
        findInQueue={findInQueueWarning}
        id="fileUploaderValidationStatesWarning"
        onDismiss={onDismissWarning}
        updateQueue={updateQueueWarning}
      >
        <FileUploaderInput
          helperText="Max file size is 10 MB"
          id="fileUploaderValidationStatesWarningInput"
          label="Label"
          labelText="or drag and drop here"
          linkText="Upload your file"
          name="attachmentsWarning"
          /* eslint-disable-next-line no-console */
          onError={(error) => console.error('My error log', error)}
          validationText="Warning validation text"
          validationState="warning"
          isRequired
        />
        <FileUploaderList
          attachmentComponent={attachmentComponent}
          id="fileUploaderValidationStatesWarningAttachment"
          inputName="attachmentsWarning"
          label="Attachments"
        />
      </FileUploader>

      <FileUploader
        addToQueue={addToQueueDanger}
        clearQueue={clearQueueDanger}
        fileQueue={fileQueueDanger}
        findInQueue={findInQueueDanger}
        id="fileUploaderValidationStatesDanger"
        onDismiss={onDismissDanger}
        updateQueue={updateQueueDanger}
      >
        <FileUploaderInput
          helperText="Max file size is 10 MB"
          id="fileUploaderValidationStatesDangerInput"
          label="Label"
          labelText="or drag and drop here"
          linkText="Upload your file"
          name="attachmentsDanger"
          /* eslint-disable-next-line no-console */
          onError={(error) => console.error('My error log', error)}
          validationText={['Danger validation text', 'Another danger validation text']}
          validationState="danger"
          isRequired
        />
        <FileUploaderList
          attachmentComponent={attachmentComponent}
          id="fileUploaderValidationStatesDangerAttachment"
          inputName="attachmentsDanger"
          label="Attachments"
        />
      </FileUploader>
    </>
  );
};

export default FileUploaderInputValidationStates;
