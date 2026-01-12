import figma from '@figma/code-connect';
import React from 'react';
import Toggle from '../Toggle';

figma.connect(Toggle, '<FIGMA_FILE_ID>?node-id=19122%3A3329', {
  props: {
    helperTextProps: figma.boolean('Helper text', {
      true: figma.nestedProps('Helper text', {
        helperText: figma.textContent('Helper text'),
      }),
      false: { helperText: undefined },
    }),
    isChecked: figma.enum('Interaction State', {
      Checked: true,
    }),
    isDisabled: figma.boolean('Disabled'),
    validationState: figma.enum('Validation State', {
      Success: 'success',
      Warning: 'warning',
      Danger: 'danger',
    }),
  },
  example: ({ helperTextProps, ...props }) => (
    <Toggle {...props} helperText={helperTextProps.helperText} id="toggle-example" label="Toggle Label Text" />
  ),
});
