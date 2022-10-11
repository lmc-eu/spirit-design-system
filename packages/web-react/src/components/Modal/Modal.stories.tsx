import { ComponentMeta } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `Modal dialog`,
      },
    },
  },
} as ComponentMeta<typeof Modal>;

export { default as Modal } from './stories/Modal';
