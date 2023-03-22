import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Text from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'Provide typograhy variants for body text.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Text>;

export { default as Text } from './stories/Text';
export { default as TextSizes } from './stories/TextSizes';
export { default as TextEmphasis } from './stories/TextEmphasis';
export { default as BodyTypography } from './stories/TextAllCombinations';
export { default as HTML } from './stories/TextHtml';
export { default as Props } from './stories/TextProps';
