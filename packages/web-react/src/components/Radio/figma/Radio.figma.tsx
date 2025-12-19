import figma from '@figma/code-connect';
import React from 'react';
import Radio from '../Radio';

figma.connect(Radio, '<FIGMA_FILE_ID>?node-id=830%3A1204', {
  props: {
    isChecked: figma.enum('Interaction State', {
      Selected: true,
      Unselected: false,
    }),
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
  },
  example: ({ helperTextProps, label, ...props }) => (
    <Radio {...props} helperText={helperTextProps.helperText} id="radio-default" label={label} />
  ),
});
