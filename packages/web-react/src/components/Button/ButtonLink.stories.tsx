import { ComponentMeta } from '@storybook/react';
import ButtonLink from './ButtonLink';

export default {
  title: 'Components/ButtonLink',
  component: ButtonLink,
  parameters: {
    docs: {
      description: {
        component: 'ButtonLinks allow users to take actions.',
      },
    },
  },
} as ComponentMeta<typeof ButtonLink>;

export { default as ButtonLink } from './stories/ButtonLink';
export { default as ButtonLinkColors } from './stories/ButtonLinkColors';
export { default as ButtonLinkDisabled } from './stories/ButtonLinkDisabled';
export { default as ButtonLinkSquare } from './stories/ButtonLinkSquare';
export { default as ButtonLinkBlock } from './stories/ButtonLinkBlock';
export { default as ButtonLinkSize } from './stories/ButtonLinkSize';
export { default as HTML } from './stories/ButtonLinkHtml';
export { default as Props } from './stories/ButtonLinkProps';
