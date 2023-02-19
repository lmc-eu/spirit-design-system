import { ComponentMeta } from '@storybook/react';
import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Tags can highlight or add emotion to information.',
      },
    },
  },
} as ComponentMeta<typeof Tag>;

export { default as Tag } from './stories/Tag';
export { default as TagColors } from './stories/TagColors';
export { default as TagSizes } from './stories/TagSizes';
export { default as HTML } from './stories/TagHtml';
export { default as Props } from './stories/TagProps';
