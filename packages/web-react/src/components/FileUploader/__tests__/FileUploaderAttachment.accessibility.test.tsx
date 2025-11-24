import React from 'react';
import { accessibilityTest } from '@local/tests';
import FileUploaderAttachment from '../FileUploaderAttachment';

jest.mock('../../../hooks/useIcon');
jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  getAttachmentInput: jest.fn(() => {
    const input = document.createElement('input');

    input.type = 'file';
    input.name = 'test[]';
    input.hidden = true;

    return input;
  }),
}));

describe('FileUploaderAttachment accessibility', () => {
  const mockFile = new File(['content'], 'test-file.txt', { type: 'text/plain' });

  accessibilityTest(
    (props) => (
      <ul>
        <FileUploaderAttachment
          {...props}
          id="file-uploader-attachment"
          label="test-file.txt"
          file={mockFile}
          name="attachments"
          onDismiss={() => {}}
        />
      </ul>
    ),
    'li',
  );
});
