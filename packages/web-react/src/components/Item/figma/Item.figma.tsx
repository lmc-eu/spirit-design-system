import figma from '@figma/code-connect';
import React from 'react';
import { Checkbox } from '../../Checkbox';
import { Radio } from '../../Radio';
import Item from '../Item';

const ITEM_NODE_URL = '<FIGMA_FILE_ID>?node-id=18686%3A1089';

const commonProps = {
  helperTextProps: figma.boolean('Helper', {
    true: figma.nestedProps('Helper text', {
      helperText: figma.textContent('Helper text'),
    }),
    false: { helperText: undefined },
  }),
  isDisabled: figma.boolean('Disabled'),
  isSelected: figma.boolean('Selected'),
  label: 'Item label',
};

figma.connect(Item, ITEM_NODE_URL, {
  props: commonProps,
  variant: {
    Type: 'Single select',
  },
  example: ({ helperTextProps, ...props }) => <Item {...props} helperText={helperTextProps.helperText} />,
});

figma.connect(Item, ITEM_NODE_URL, {
  props: commonProps,
  variant: {
    Type: 'Multi select',
  },
  example: ({ helperTextProps, ...props }) => (
    <Checkbox
      {...props}
      helperText={helperTextProps.helperText}
      id="checkbox-item-default"
      name="checkboxItemDefault"
      isItem
    />
  ),
});

figma.connect(Item, ITEM_NODE_URL, {
  props: commonProps,
  variant: {
    Type: 'Radio',
  },
  example: ({ helperTextProps, ...props }) => (
    <Radio {...props} helperText={helperTextProps.helperText} id="radio-item-default" isItem name="item" />
  ),
});

figma.connect(Item, ITEM_NODE_URL, {
  props: {
    ...commonProps,
    iconProps: figma.instance('Icon').getProps<{ name: string }>(),
  },
  variant: {
    Type: 'Single select+Icon',
  },
  example: ({ helperTextProps, iconProps, ...props }) => (
    <Item {...props} helperText={helperTextProps.helperText} iconName={iconProps.name} />
  ),
});
