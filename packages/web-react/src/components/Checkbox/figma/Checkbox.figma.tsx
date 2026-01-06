import figma from '@figma/code-connect';
import React from 'react';
import Checkbox from '../Checkbox';

figma.connect(Checkbox, '<FIGMA_FILE_ID>?node-id=830%3A292', {
  props: {
    indeterminate: figma.boolean('Indeterminate'),
    isChecked: figma.boolean('Selected'),
    isDisabled: figma.boolean('Disabled'),
    helperTextProps: figma.boolean('Helper', {
      true: figma.nestedProps('Helper text', {
        helperText: figma.textContent('Helper text'),
      }),
      false: { helperText: undefined },
    }),
    label: figma.string('Label text'),
    validationState: figma.enum('Validation State', {
      Success: 'success',
      Warning: 'warning',
      Danger: 'danger',
    }),
    validationTextProps: figma.nestedProps('Validation text', {
      validationText: figma.string('Message'),
    }),
  },
  example: ({ helperTextProps, label, validationTextProps, ...props }) => (
    <Checkbox
      {...props}
      helperText={helperTextProps.helperText}
      id="checkbox-default"
      label={label}
      validationText={validationTextProps.validationText}
    />
  ),
});
