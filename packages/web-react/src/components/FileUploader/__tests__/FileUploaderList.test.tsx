import React from 'react';
import { render } from '@testing-library/react';
import FileUploader from '../FileUploader';
import FileUploaderList from '../FileUploaderList';
import { SpiritFileUploaderAttachmentProps } from '../../../types';

describe('FileUploaderList', () => {
  const props = {
    label: 'File uploader',
    id: 'file-uploader',
    attachmentComponent: () => <div />,
    inputName: 'file-input',
  };

  it('should render the component with the provided props', () => {
    const { getByText, getByRole } = render(<FileUploaderList {...props} />);
    const label = getByText(props.label);
    const list = getByRole('list');

    expect(label).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });

  it('should render the attachments', () => {
    const attachmentComponent = (ps: SpiritFileUploaderAttachmentProps) => <li key={ps.id}>{ps.label}</li>;
    const fileQueue = new Map();
    fileQueue.set('1', { name: 'file1.txt' });
    fileQueue.set('2', { name: 'file2.txt' });
    const { getByText } = render(
      <FileUploader
        fileQueue={fileQueue}
        id="test"
        clearQueue={() => new Map()}
        addToQueue={() => new Map()}
        onDismiss={() => new Map()}
      >
        <FileUploaderList {...props} attachmentComponent={attachmentComponent} />
      </FileUploader>,
    );

    expect(getByText('file1.txt')).toBeInTheDocument();
    expect(getByText('file2.txt')).toBeInTheDocument();
  });
});
