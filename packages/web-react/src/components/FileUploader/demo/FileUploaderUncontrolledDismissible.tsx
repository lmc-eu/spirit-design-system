import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SpiritUncontrolledFileUploaderProps } from '../../../types';
import UncontrolledFileUploader from '../UncontrolledFileUploader';
import FileUploaderAttachment from '../FileUploaderAttachment';

const Story: ComponentStory<typeof UncontrolledFileUploader> = (args: SpiritUncontrolledFileUploaderProps) => (
  <UncontrolledFileUploader {...args} />
);

Story.args = {
  attachmentComponent: (props) => <FileUploaderAttachment key={props.id} {...props} />,
  id: 'fileUploaderUncontrolled',
  inputId: 'fileUploaderUncontrolledInput',
  inputName: 'attachments',
  inputLabel: 'Input label',
  inputProps: {
    accept: '*',
  },
  linkText: 'Upload your file(s)',
  listId: 'fileUploaderUncontrolledList',
  listProps: {
    label: 'Attachments',
  },
  queueLimitBehavior: 'hide',
  isMultiple: true,
  maxUploadedFiles: 3,
  /* eslint-disable-next-line no-console */
  onInputError: (error) => console.error('My error log', error),
};

export default Story;
