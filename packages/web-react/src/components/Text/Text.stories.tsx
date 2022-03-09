import { ComponentMeta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: `Provide typograhy variants for body text.`,
      },
    },
  },
} as ComponentMeta<typeof Text>;

export { default as Text } from './stories/Text';
export { default as TextSizes } from './stories/TextSizes';
export { default as TextEmphasis } from './stories/TextEmphasis';
export { default as BodyTypography } from './stories/TextAllCombinations';
export { default as Props } from './stories/TextProps';
