import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReadMe from '../README.md';
import { Timeline } from '..';
import { TimelineWithDot, TimelineWithIcon, TimelineWithNumber } from './TimelineParts';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'select',
      options: ['With Number', 'With Dot', 'With Icon'],
      mapping: {
        'With Number': <TimelineWithNumber />,
        'With Dot': <TimelineWithDot />,
        'With Icon': <TimelineWithIcon />,
      },
      table: {
        type: { summary: 'ReactNode' },
      },
      description: 'Timeline content including TimelineStep components',
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'ol' },
      },
      description: 'The HTML element used to render the timeline',
    },
  },
  args: {
    children: 'With Number',
    elementType: 'ol',
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const TimelinePlayground: Story = {
  name: 'Timeline',
};
