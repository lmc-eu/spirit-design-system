import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypesUncontrolled';
import UncontrolledFileUploader from './UncontrolledFileUploader';

export default {
  title: 'Components/FileUploader',
  component: UncontrolledFileUploader,
  argTypes,
} as ComponentMeta<typeof UncontrolledFileUploader>;

export { default as FileUploaderUncontrolled } from './demo/FileUploaderUncontrolled';
