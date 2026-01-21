import figma from '@figma/code-connect';
import React from 'react';
import { Icon } from '../../Icon';
import { Truncate } from '../../Truncate';
import SegmentedControlItem from '../SegmentedControlItem';

const SEGMENTED_CONTROL_ITEM_NODE_URL = '<FIGMA_FILE_ID>?node-id=29237%3A1987';

const commonProps = {
  isDisabled: figma.enum('State', {
    Disabled: true,
  }),
  isLabelHidden: figma.boolean('Label', {
    true: false,
    false: true,
  }),
  labelProps: figma.boolean('Label', {
    true: figma.nestedProps('Label', {
      label: figma.string('Label'),
    }),
    false: { label: 'Fill accessible label' },
  }),
};

figma.connect(SegmentedControlItem, SEGMENTED_CONTROL_ITEM_NODE_URL, {
  props: commonProps,
  variant: { Icon: true },
  example: ({ labelProps, ...props }) => (
    <SegmentedControlItem {...props}>
      <Icon name="placeholder" />
      <Truncate mode="lines" limit={1}>
        {labelProps.label}
      </Truncate>
    </SegmentedControlItem>
  ),
});

figma.connect(SegmentedControlItem, SEGMENTED_CONTROL_ITEM_NODE_URL, {
  props: commonProps,
  variant: { Icon: false },
  example: ({ labelProps, ...props }) => (
    <SegmentedControlItem {...props}>
      <Truncate mode="lines" limit={1}>
        {labelProps.label}
      </Truncate>
    </SegmentedControlItem>
  ),
});
