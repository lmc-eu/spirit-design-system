import React from 'react';
import { DEMO_ATTACHMENT_BASE64_IMAGE } from './constants';
import { base64ToByteArray } from '../utils';
import { FileUploaderAttachment as FileUploaderAttachmentComponent, useFileQueue } from '..';

const FileUploaderAttachment = () => {
  const { onDismiss } = useFileQueue();

  const byteArray = base64ToByteArray(DEMO_ATTACHMENT_BASE64_IMAGE);

  // ⚠️ VISUAL EXAMPLE ONLY, DO NOT COPY-PASTE
  return (
    <div className="FileUploader">
      <div className="FileUploaderList">
        <FileUploaderAttachmentComponent
          name="test"
          file={new File([''], 'Document.pdf', { type: 'image/png', lastModified: 123456789 })}
          id="1"
          label="Document.pdf"
          onDismiss={onDismiss}
        />
        <FileUploaderAttachmentComponent
          hasImagePreview
          name="test"
          file={new File([byteArray], 'test1.png', { type: 'image/png', lastModified: 123456789 })}
          id="2"
          label="Image with a long name.jpg"
          onDismiss={onDismiss}
          onEdit={() => {
            alert('Edit');
          }}
        />
      </div>
    </div>
  );
};

export default FileUploaderAttachment;
