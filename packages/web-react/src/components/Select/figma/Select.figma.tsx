import figma from '@figma/code-connect';
import React from 'react';
import Select from '../Select';

figma.connect(Select, '<FIGMA_FILE_ID>?node-id=10580%3A5547', {
  props: {
    helperTextProps: figma.boolean('Helper', {
      true: figma.nestedProps('Helper text', {
        helperText: figma.textContent('Helper text'),
      }),
      false: { helperText: undefined },
    }),
    isDisabled: figma.boolean('Disabled'),
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
    size: figma.enum('Size', {
      Small: 'small',
      Large: 'large',
    }),
    validationState: figma.enum('Validation State', {
      Success: 'success',
      Warning: 'warning',
      Danger: 'danger',
    }),
    validationTextProps: figma.nestedProps('Validation text', {
      validationText: figma.string('Message'),
    }),
  },
  example: ({ helperTextProps, labelProps, validationTextProps, ...props }) => (
    <Select
      {...props}
      helperText={helperTextProps.helperText}
      id="select-default"
      label={labelProps.label}
      validationText={validationTextProps.validationText}
    >
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </Select>
  ),
});
