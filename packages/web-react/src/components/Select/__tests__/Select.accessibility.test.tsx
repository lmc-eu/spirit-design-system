import React from 'react';
import { accessibilityDisabledTest, accessibilityTest, accessibilityValidationStateTest } from '@local/tests';
import Select from '../Select';

describe('Select accessibility', () => {
  accessibilityTest(
    (props) => (
      <Select {...props} id="select" label="Label">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    ),
    'select',
  );

  accessibilityDisabledTest(
    (props) => (
      <Select {...props} id="select-disabled" label="Label">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    ),
    'select',
  );

  accessibilityValidationStateTest(
    (props) => (
      <Select {...props} id="select-validation" label="Label" validationText="Validation text">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    ),
    'select',
  );
});
