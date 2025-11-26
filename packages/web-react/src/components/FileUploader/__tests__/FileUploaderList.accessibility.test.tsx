import React, { type ReactNode } from 'react';
import { accessibilityTest } from '@local/tests';
import { FileUploader, FileUploaderList, useFileQueue } from '..';

jest.mock('../../../hooks/useIcon');

describe('FileUploaderList accessibility', () => {
  const FileUploaderWrapper = ({ children }: { children: ReactNode }) => {
    const { fileQueue, addToQueue, clearQueue, onDismiss, findInQueue, updateQueue } = useFileQueue();

    return (
      <FileUploader
        id="file-uploader"
        fileQueue={fileQueue}
        addToQueue={addToQueue}
        clearQueue={clearQueue}
        onDismiss={onDismiss}
        findInQueue={findInQueue}
        updateQueue={updateQueue}
      >
        {children}
      </FileUploader>
    );
  };

  accessibilityTest(
    (props) => (
      <FileUploaderWrapper>
        <FileUploaderList
          {...props}
          id="file-uploader-list"
          label="Attachments"
          inputName="attachments"
          attachmentComponent={() => null}
        />
      </FileUploaderWrapper>
    ),
    'ul',
  );
});
