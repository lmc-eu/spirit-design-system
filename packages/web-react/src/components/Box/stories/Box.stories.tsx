import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BackgroundColors, BorderColors, BorderRadii, BorderStyles, BorderWidths } from '../../../constants';
import Box from '../Box';
import ReadMe from '../README.md';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    elementType: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'div',
        },
      },
    },
    padding: {
      control: 'text',
      table: {
        type: {
          summary: 'SpaceToken',
        },
      },
    },
    paddingX: {
      control: 'text',
      table: {
        type: {
          summary: 'SpaceToken',
        },
      },
    },
    paddingY: {
      control: 'text',
      table: {
        type: {
          summary: 'SpaceToken',
        },
      },
    },
    paddingTop: {
      control: 'text',
      table: {
        type: {
          summary: 'SpaceToken',
        },
      },
    },
    paddingBottom: {
      control: 'text',
      table: {
        type: {
          summary: 'SpaceToken',
        },
      },
    },
    paddingLeft: {
      control: 'text',
      table: {
        type: {
          summary: 'SpaceToken',
        },
      },
    },
    paddingRight: {
      control: 'text',
      table: {
        type: {
          summary: 'SpaceToken',
        },
      },
    },
    borderWidth: {
      control: 'select',
      options: Object.values(BorderWidths),
      table: {
        type: {
          summary: 'BorderWidthsDictionaryType',
        },
      },
    },
    borderRadius: {
      control: 'select',
      options: Object.values(BorderRadii),
      table: {
        type: {
          summary: 'BorderRadiiDictionaryType',
        },
      },
    },
    borderStyle: {
      control: 'select',
      options: Object.values(BorderStyles),
      table: {
        type: {
          summary: 'BorderStylesDictionaryType',
        },
      },
    },
    borderColor: {
      control: 'select',
      options: Object.values(BorderColors),
      table: {
        type: {
          summary: 'BorderColorsDictionaryType',
        },
      },
    },
    backgroundColor: {
      control: 'select',
      options: Object.values(BackgroundColors),
      table: {
        type: {
          summary: 'BackgroundColorsDictionaryType',
        },
      },
    },
  },
  args: {
    elementType: 'div',
    padding: undefined,
    borderWidth: undefined,
    borderStyle: 'solid',
    borderRadius: undefined,
    borderColor: 'basic',
    backgroundColor: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Playground: Story = {
  name: 'Box',
  render: (args) => <Box {...args}>Content</Box>,
};
