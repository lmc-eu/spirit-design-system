import figma from '@figma/code-connect';
import React, { type MouseEvent } from 'react';
import FileUploaderAttachment from '../FileUploaderAttachment';

figma.connect(FileUploaderAttachment, '<FIGMA_FILE_ID>?node-id=13538%3A10274', {
  props: {
    onEdit: figma.boolean('Edit', {
      // eslint-disable-next-line no-console
      true: (event: MouseEvent, file: File) => console.log(event, file),
      false: undefined,
    }),
    hasImagePreview: figma.enum('Attachment Type', {
      File: false,
      Photo: true,
    }),
  },
  example: (props) => (
    <FileUploaderAttachment
      file={new File([], 'example.pdf', { type: 'application/pdf' })}
      id="file-uploader-attachment-example"
      label="Example.pdf"
      name="example"
      onDismiss={() => new Map()}
      {...props}
    />
  ),
});
