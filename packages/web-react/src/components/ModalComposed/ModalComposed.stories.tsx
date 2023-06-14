import { ComponentMeta } from '@storybook/react';
import ModalComposed from './ModalComposed';

export default {
  title: 'Components/ModalComposed',
  component: ModalComposed,
  parameters: {
    docs: {
      description: {
        component: 'Add dialogs to your site for lightboxes, user notifications, or completely custom content.',
      },
    },
  },
} as ComponentMeta<typeof ModalComposed>;

export { default as ModalComposed } from './stories/ModalComposed';
export { default as ModalComposedWithCustomHeight } from './stories/ModalComposedWithCustomHeight';
export { default as ModalComposedWithLongText } from './stories/ModalComposedWithLongText';
export { default as HTML } from './stories/ModalComposedHtml';
export { default as Props } from './stories/ModalComposedProps';
