import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReadMe from '../README.md';
import UNSTABLE_Truncate from '../UNSTABLE_Truncate';

const meta: Meta<typeof UNSTABLE_Truncate> = {
  title: 'Experimental/UNSTABLE_Truncate',
  component: UNSTABLE_Truncate,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    lines: {
      control: 'number',
      table: {
        defaultValue: { summary: '3' },
      },
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam quis nulla. Vivamus ac leo pretium faucibus.\n' +
      'Pellentesque pretium lectus id turpis. Maecenas lorem. Maecenas sollicitudin. Nullam justo enim, consectetuer nec,\n' +
      'ullamcorper ac, vestibulum in, elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n' +
      'doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n' +
      'vitae dicta sunt explicabo. Suspendisse sagittis ultrices augue. Aenean fermentum risus id tortor. Etiam bibendum\n' +
      'elit eget erat. Nulla quis diam. Donec iaculis gravida nulla. Nulla pulvinar eleifend sem. Fusce aliquam vestibulum\n' +
      'ipsum. Sed ac dolor sit amet purus malesuada congue. In dapibus augue non sapien. Morbi imperdiet, mauris ac auctor\n' +
      'dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nam sed tellus id magna elementum tincidunt.',
    lines: 3,
  },
};

export default meta;
type Story = StoryObj<typeof UNSTABLE_Truncate>;

export const Playground: Story = {
  name: 'UNSTABLE_Truncate',
};
