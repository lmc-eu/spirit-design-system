import {
  FileUploader,
  FileUploaderAttachment,
  FileUploaderInput,
  FileUploaderList,
  useFileQueue,
  SpiritFileUploaderAttachmentProps,
} from '@lmc-eu/spirit-web-react';
import React, { useState } from 'react';

const Home = () => {
  const [errorMessage, setErrorMessage] = useState<(string | Error)[]>([]);

  const {
    fileQueue: fileQueueWarning,
    addToQueue: addToQueueWarning,
    clearQueue: clearQueueWarning,
    onDismiss: onDismissWarning,
    findInQueue: findInQueueWarning,
    updateQueue: updateQueueWarning,
  } = useFileQueue();

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  return (
    <FileUploader
      addToQueue={(key, file) => {
        return addToQueueWarning(key, file);
      }}
      clearQueue={clearQueueWarning}
      fileQueue={fileQueueWarning}
      findInQueue={findInQueueWarning}
      id="file-uploader-validation-states-warning"
      onDismiss={onDismissWarning}
      updateQueue={updateQueueWarning}
    >
      <FileUploaderInput
        helperText="Max file size is 50 kb"
        id="file-uploader-validation-states-warning-input"
        label="Label"
        labelText="or drag and drop here"
        linkText="Upload your file"
        name="attachmentsWarning"
        onError={(error) => {
          setErrorMessage((prevErrors) => [...prevErrors, error]);
        }}
        validationText={`${errorMessage.join(', ')}`}
        validationState="warning"
        isRequired
        isMultiple
        maxFileSize={51200} // 50 kb
        // add onInput callback should solve issue if upload files by select them (not for drag and drop)
        // onInput={() => setErrorMessage([])}
      />
      <FileUploaderList
        attachmentComponent={attachmentComponent}
        id="file-uploader-validation-states-warning-attachment"
        inputName="attachmentsWarning"
        label="Attachments"
      />
    </FileUploader>
  );
};

export default Home;
