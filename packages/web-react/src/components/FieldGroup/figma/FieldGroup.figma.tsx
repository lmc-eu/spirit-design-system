import figma from '@figma/code-connect';
import React from 'react';
import { Checkbox } from '../../Checkbox';
import { Radio } from '../../Radio';
import FieldGroup from '../FieldGroup';

const FIELD_GROUP_NODE_URL = '<FIGMA_FILE_ID>?node-id=12858%3A10625';

const commonProps = {
  id: 'fieldgroup-example',
  label: 'Label',
  isRequired: true,
  helperTextProps: figma.boolean('Helper', {
    true: figma.nestedProps('Helper text', {
      helperText: figma.textContent('Helper text'),
    }),
    false: { helperText: undefined },
  }),
  isDisabled: figma.boolean('Disabled'),
  validationState: figma.enum('Validation State', {
    Success: 'success',
    Warning: 'warning',
    Danger: 'danger',
  }),
};

figma.connect(FieldGroup, FIELD_GROUP_NODE_URL, {
  props: commonProps,
  variant: {
    Type: 'Radio',
  },
  example: ({ helperTextProps, ...props }) => (
    <FieldGroup helperText={helperTextProps.helperText} {...props} id="fieldgroup-example" label="Label" isRequired>
      <Radio id="radio-1" label="Radio Label Text" name="radioDefault" isChecked />
      <Radio id="radio-2" label="Radio Label Text" name="radioDefault" />
      <Radio id="radio-3" label="Radio Label Text" name="radioDefault" />
      <Radio id="radio-4" label="Radio Label Text" name="radioDefault" />
    </FieldGroup>
  ),
});

figma.connect(FieldGroup, FIELD_GROUP_NODE_URL, {
  props: commonProps,
  variant: {
    Type: 'Checkbox',
  },
  example: ({ helperTextProps, ...props }) => (
    <FieldGroup helperText={helperTextProps.helperText} {...props} id="fieldgroup-example" label="Label" isRequired>
      <Checkbox id="checkbox-1" label="Checkbox Label Text" name="checkboxDefault" isChecked />
      <Checkbox id="checkbox-2" label="Checkbox Label Text" name="checkboxDefault" />
      <Checkbox id="checkbox-3" label="Checkbox Label Text" name="checkboxDefault" />
      <Checkbox id="checkbox-4" label="Checkbox Label Text" name="checkboxDefault" />
    </FieldGroup>
  ),
});
