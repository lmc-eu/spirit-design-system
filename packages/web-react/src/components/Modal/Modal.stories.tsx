import { ComponentMeta } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `Add dialogs to your site for lightboxes, user notifications, or completely custom content.`,
      },
    },
  },
} as ComponentMeta<typeof Modal>;

export { default as Modal } from './stories/Modal';
export { default as ModalWithLongText } from './stories/ModalWithLongText';
export { default as HTML } from './stories/ModalHtml';
export { default as Props } from './stories/ModalProps';
