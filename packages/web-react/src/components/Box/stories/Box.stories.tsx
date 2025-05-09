import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BackgroundColors, BackgroundGradients, BorderColors, BorderStyles, BorderWidths } from '../../../constants';
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
      options: [...Object.values(BorderWidths), undefined],
      table: {
        type: {
          summary: 'BorderWidthsDictionaryType',
        },
      },
    },
    borderRadius: {
      control: 'object',
    },
    borderStyle: {
      control: 'select',
      options: Object.values(BorderStyles),
      table: {
        defaultValue: { summary: BorderStyles.SOLID },
        type: {
          summary: 'BorderStylesDictionaryType',
        },
      },
    },
    borderColor: {
      control: 'select',
      options: [...Object.values(BorderColors), undefined],
      table: {
        type: {
          summary: 'BorderColorsDictionaryType',
        },
      },
    },
    backgroundColor: {
      control: 'select',
      options: [...Object.values(BackgroundColors), undefined],
      table: {
        type: {
          summary: 'BackgroundColorsDictionaryType',
        },
      },
    },
    backgroundGradient: {
      control: 'select',
      options: [...Object.values(BackgroundGradients), undefined],
      table: {
        type: {
          summary: 'BackgroundGradientsDictionaryType',
        },
      },
    },
  },
  args: {
    elementType: 'div',
    padding: undefined,
    borderWidth: undefined,
    borderStyle: 'solid',
    borderRadius: {
      mobile: '100',
      tablet: '200',
      desktop: '400',
    },
    borderColor: undefined,
    backgroundColor: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Playground: Story = {
  name: 'Box',
  render: (args) => <Box {...args}>Content</Box>,
};
