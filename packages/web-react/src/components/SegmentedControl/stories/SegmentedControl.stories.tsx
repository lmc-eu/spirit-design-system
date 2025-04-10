import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FillVariants } from '../../../constants';
import { Icon } from '../../Icon';
import ReadMe from '../README.md';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'select',
      options: ['label only', 'label with icon', 'icon only'],
      description: `This is the place for the content of the SegmentedControl.
        In the real code you can pass any children you want.
        In this demo we have predefined options:
        \`label only\`, \`label with icon\` and \`icon only\`.`,
    },
    hasMultipleSelection: {
      control: { type: 'boolean' },
    },
    isFluid: {
      control: { type: 'boolean' },
    },
    name: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select', options: Object.values(FillVariants) },
    },
  },
  args: {
    children: 'label only',
    hasMultipleSelection: false,
    isFluid: false,
    label: 'Segmented Control Label',
    name: 'segmented-control',
    variant: FillVariants.OUTLINE,
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Playground: Story = {
  name: 'SegmentedControl',
  args: {
    children: 'labelOnly',
    hasMultipleSelection: false,
    isFluid: false,
    name: 'segmented-control-example',
    label: 'Segmented Control Example',
    variant: FillVariants.OUTLINE,
  },
  render: (args) => {
    const getItemContent = (isDisabled = false) => {
      const label = isDisabled ? 'Label disabled' : 'Label';

      switch (args.children) {
        case 'label with icon':
          return (
            <>
              <Icon name="file" boxSize={24} />
              {label}
            </>
          );
        case 'icon only':
          return <Icon name="file" boxSize={24} />;
        case 'label only':
        default:
          return label;
      }
    };

    return (
      <SegmentedControl {...args} UNSAFE_style={{ display: 'inline-grid' }}>
        <SegmentedControlItem value="value-1" id="segmented-control-1">
          {getItemContent()}
        </SegmentedControlItem>
        <SegmentedControlItem value="value-2" id="segmented-control-2">
          {getItemContent()}
        </SegmentedControlItem>
        <SegmentedControlItem value="value-3" id="segmented-control-3" isDisabled>
          {getItemContent(true)}
        </SegmentedControlItem>
        <SegmentedControlItem value="value-4" id="segmented-control-4">
          {getItemContent()}
        </SegmentedControlItem>
      </SegmentedControl>
    );
  },
};
