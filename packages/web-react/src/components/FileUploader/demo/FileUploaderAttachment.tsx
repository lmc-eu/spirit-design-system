import React from 'react';
import { base64ToByteArray } from '../utils';
import { FileUploaderAttachment as FileUploaderAttachmentComponent, useFileQueue } from '..';
import { DEMO_ATTACHMENT_BASE64_IMAGE, DEMO_ATTACHMENT_BASE64_IMAGE_40X52 } from './constants';

const FileUploaderAttachment = () => {
  const { onDismiss } = useFileQueue();

  const byteArray = base64ToByteArray(DEMO_ATTACHMENT_BASE64_IMAGE);
  const byteArrayPortrait = base64ToByteArray(DEMO_ATTACHMENT_BASE64_IMAGE_40X52);

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
        <FileUploaderAttachmentComponent
          hasImagePreview
          name="test"
          file={new File([byteArrayPortrait], 'test1.png', { type: 'image/png', lastModified: 123456789 })}
          id="2"
          label="Contained image"
          onDismiss={onDismiss}
          imageObjectFit="contain"
        />
      </div>
    </div>
  );
};

export default FileUploaderAttachment;
