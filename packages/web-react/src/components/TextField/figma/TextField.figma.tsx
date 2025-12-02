import figma from '@figma/code-connect';
import React from 'react';
import TextField from '../TextField';

figma.connect(TextField, '<FIGMA_FILE_ID>?node-id=830%3A2815', {
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
    <TextField
      {...props}
      helperText={helperTextProps.helperText}
      id="text-field-default"
      label={labelProps.label}
      validationText={validationTextProps.validationText}
    />
  ),
});
