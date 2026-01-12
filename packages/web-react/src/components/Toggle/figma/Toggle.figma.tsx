import figma from '@figma/code-connect';
import React from 'react';
import Toggle from '../Toggle';

figma.connect(Toggle, '<FIGMA_FILE_ID>?node-id=18817%3A40', {
  props: {
    isChecked: figma.boolean('Selected'),
    isDisabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: (props) => <Toggle {...props} id="toggle-example" label="Fill accessible label" isLabelHidden />,
});
