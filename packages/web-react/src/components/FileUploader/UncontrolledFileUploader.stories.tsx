import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypesUncontrolled';
import UncontrolledFileUploader from './UncontrolledFileUploader';

export default {
  title: 'Components/FileUploader',
  component: UncontrolledFileUploader,
  argTypes,
} as ComponentMeta<typeof UncontrolledFileUploader>;

export { default as FileUploaderUncontrolled } from './stories/FileUploaderUncontrolled';
export { default as FileUploaderUncontrolledDismissible } from './stories/FileUploaderUncontrolledDismissible';
export { default as FormWithUncontrolledFileUploader } from './stories/FormWithUncontrolledFileUploader';
