import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import FileUploader from './FileUploader';
import FileUploaderAttachment from './FileUploaderAttachment';
import ReadMe from './README.md';

const base64Image = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVQI12P4z8AAwADgPwMH2I7PAAAAAElFTkSuQmCC';

// Convert Base64 to Uint8Array
const byteCharacters = atob(base64Image);
const byteNumbers = new Array(byteCharacters.length);
for (let i = 0; i < byteCharacters.length; i++) {
  byteNumbers[i] = byteCharacters.charCodeAt(i);
}
const byteArray = new Uint8Array(byteNumbers);

const meta: Meta<typeof FileUploaderAttachment> = {
  title: 'Components/FileUploader',
  component: FileUploaderAttachment,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    editText: {
      control: 'text',
      table: {
        defaultValue: { summary: 'Edit' },
      },
    },
    file: {
      control: 'file',
    },
    hasImagePreview: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    iconName: {
      control: 'text',
      table: {
        defaultValue: { summary: 'file' },
      },
    },
    id: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    onDismiss: {
      control: 'text',
    },
    onEdit: {
      control: 'text',
    },
    onError: {
      control: 'text',
    },
    removeText: {
      control: 'text',
      table: {
        defaultValue: { summary: 'Remove' },
      },
    },
  },
  args: {
    editText: 'Edit',
    file: new File([byteArray], 'test1.png', { type: 'image/png', lastModified: 123456789 }),
    hasImagePreview: false,
    id: 'file-uploader-attachment-example',
    iconName: 'file',
    label: 'File name',
    name: 'attachments',
    onDismiss: undefined,
    onEdit: undefined,
    onError: undefined,
    removeText: 'Remove',
  },
};

export default meta;
type Story = StoryObj<typeof FileUploader>;

export const FileUploaderAttachmentPlayground: Story = {
  name: 'FileUploaderAttachment',
};
