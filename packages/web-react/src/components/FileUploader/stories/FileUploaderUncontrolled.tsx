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
  iconName: 'upload',
  id: 'fileUploaderUncontrolled',
  inputId: 'fileUploaderUncontrolledInput',
  inputName: 'attachments',
  inputLabel: 'Input label',
  inputProps: {
    accept: '*',
  },
  listId: 'fileUploaderUncontrolledList',
  listProps: {
    label: 'Attachments',
  },
  /* eslint-disable-next-line no-console */
  onInputError: (error) => console.error('My error log', error),
};

export default Story;
