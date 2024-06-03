import React from 'react';
import { FileUploaderAttachmentBaseProps, SpiritUncontrolledFileUploaderProps } from '../../../types';
import FileUploaderAttachment from '../FileUploaderAttachment';
import UncontrolledFileUploader from '../UncontrolledFileUploader';

const Story = (args: SpiritUncontrolledFileUploaderProps) => <UncontrolledFileUploader {...args} />;

Story.args = {
  attachmentComponent: (props: FileUploaderAttachmentBaseProps) => <FileUploaderAttachment key={props.id} {...props} />,
  iconName: 'upload',
  id: 'fileUploaderUncontrolled',
  inputId: 'fileUploaderUncontrolledInput',
  inputName: 'attachments',
  inputLabel: 'Label',
  linkText: 'Upload your file(s)',
  labelText: 'or drag and drop here',
  helperText: 'Max file size is 10 MB',
  inputProps: {
    accept: '*',
  },
  listId: 'fileUploaderUncontrolledList',
  listProps: {
    label: 'Attachments',
  },
  /* eslint-disable-next-line no-console */
  onInputError: (error: string | Error) => console.error('My error log', error),
};

export default Story;
