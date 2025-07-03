import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BackgroundColors, SizesExtended } from '../../../constants';
import { getAccentBackgroundColors, getEmotionBackgroundColors } from '../../../utils/colorObjectGenerators';
import { IconBoxBorderRadii } from '../constants';
import { IconBox } from '../index';
import ReadMe from '../README.md';

const accentBackgroundColorsObject = getAccentBackgroundColors();
const emotionBackgroundColorsObject = getEmotionBackgroundColors();

const meta: Meta<typeof IconBox> = {
  title: 'Components/IconBox',
  component: IconBox,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    borderRadius: {
      control: 'select',
      options: [...Object.values(IconBoxBorderRadii)],
      table: {
        type: {
          summary: 'rounded | circle | square',
        },
      },
      defaultValue: {
        summary: IconBoxBorderRadii.ROUNDED,
      },
    },
    color: {
      control: 'select',
      options: [
        ...Object.values(BackgroundColors),
        ...[...Object.values(accentBackgroundColorsObject), ...Object.values(emotionBackgroundColorsObject)],
      ],
      table: {
        type: {
          summary: 'BackgroundColorsDictionaryType | AccentColorsType | EmotionColorsType',
        },
      },
      defaultValue: {
        summary: BackgroundColors.PRIMARY,
      },
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'div',
        },
      },
    },
    hasBorder: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    iconName: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
    size: {
      control: 'select',
      options: [...Object.values(SizesExtended)],
      table: {
        type: {
          summary: 'SizeExtendedDictionaryType',
        },
      },
    },
  },
  args: {
    borderRadius: IconBoxBorderRadii.ROUNDED,
    color: BackgroundColors.PRIMARY,
    elementType: 'div',
    hasBorder: true,
    iconName: 'search',
    size: SizesExtended.MEDIUM,
  },
};

export default meta;
type Story = StoryObj<typeof IconBox>;

export const Playground: Story = {
  name: 'IconBox',
  render: (args) => (
    <div className="d-inline-block">
      <IconBox {...args} />
    </div>
  ),
};
