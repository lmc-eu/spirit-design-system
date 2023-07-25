import { ComponentMeta } from '@storybook/react';
import FileUploader from './FileUploader';

export default {
  title: 'Components/FileUploader',
  component: FileUploader,
} as ComponentMeta<typeof FileUploader>;

export { default as FileUploader } from './stories/FileUploader';
export { default as FileUploaderAccept } from './stories/FileUploaderAccept';
export { default as FileUploaderWithImagePreview } from './stories/FileUploaderWithImagePreview';
export { default as FileUploaderDismissible } from './stories/FileUploaderDismissible';
export { default as FileUploaderFluid } from './stories/FileUploaderFluid';
export { default as FileUploaderValidationState } from './stories/FileUploaderValidationState';
export { default as FormWithFileUploader } from './stories/FormWithFileUploader';
