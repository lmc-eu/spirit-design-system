import React from 'react';
import { FileUploader, FileUploaderAttachment, FileUploaderInput, useFileQueue } from '..';

const FileUploaderInputWithAttachment = () => {
  const { fileQueue, addToQueue, clearQueue, onDismiss, findInQueue, updateQueue } = useFileQueue();

  return (
    <>
      {/* ⚠️ VISUAL EXAMPLE ONLY, DO NOT COPY-PASTE */}
      <FileUploader
        addToQueue={addToQueue}
        clearQueue={clearQueue}
        fileQueue={fileQueue}
        findInQueue={findInQueue}
        id="fileUploaderInputWithAttachment"
        onDismiss={onDismiss}
        updateQueue={updateQueue}
      >
        <FileUploaderInput
          helperText="Max file size is 10 MB"
          id="fileUploaderInputWithAttachmentInput"
          label="Label"
          labelText="or drag and drop here"
          linkText="Upload your file"
          name="attachments"
          /* eslint-disable-next-line no-console */
          onError={(error) => console.error('My error log', error)}
        />
        <div className="FileUploaderList">
          <FileUploaderAttachment
            name="test"
            file={new File([''], 'My resume.docx', { type: '.docx', lastModified: 123456789 })}
            id="1"
            label="My resume.docx"
            onDismiss={onDismiss}
          />
        </div>
      </FileUploader>

      {/* ⚠️ VISUAL EXAMPLE ONLY, DO NOT COPY-PASTE */}
      <FileUploader
        addToQueue={addToQueue}
        clearQueue={clearQueue}
        fileQueue={fileQueue}
        findInQueue={findInQueue}
        id="fileUploaderInputWithAttachmentValidationState"
        onDismiss={onDismiss}
        updateQueue={updateQueue}
      >
        <FileUploaderInput
          helperText="Max file size is 10 MB"
          id="fileUploaderInputWithAttachmentValidationStateInput"
          label="Label"
          labelText="or drag and drop here"
          linkText="Upload your file"
          name="attachments"
          /* eslint-disable-next-line no-console */
          onError={(error) => console.error('My error log', error)}
          validationText="Danger validation text"
          validationState="danger"
        />
        <div className="FileUploaderList">
          <FileUploaderAttachment
            name="test"
            file={new File([''], 'My resume.docx', { type: '.docx', lastModified: 123456789 })}
            id="1"
            label="My resume.docx"
            onDismiss={onDismiss}
          />
          <FileUploaderAttachment
            name="test"
            file={new File([''], 'My resume.docx', { type: '.pdf', lastModified: 123456789 })}
            id="1"
            label="My resume with a name that is too long so it needs to be trimmed. You're not gonna see this part!.pdf"
            onDismiss={onDismiss}
          />
        </div>
      </FileUploader>
    </>
  );
};

export default FileUploaderInputWithAttachment;
