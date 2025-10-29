import React from 'react';
import { accessibilityValidationStateTest, accessibilityDisabledTest, accessibilityTest } from '@local/tests';
import Checkbox from '../Checkbox';

describe('Checkbox accessibility', () => {
  accessibilityTest(
    (props) => <Checkbox {...props} id="checkbox" name="checkbox" label="Check me" helperText="Helper text" />,
    'input[type="checkbox"]',
  );

  accessibilityDisabledTest(
    (props) => <Checkbox {...props} id="checkbox" name="checkbox" label="Check me" />,
    'input[type="checkbox"]',
  );

  accessibilityValidationStateTest(
    (props) => (
      <Checkbox {...props} id="checkbox" name="checkbox" label="Check me" isRequired validationText="Validation text" />
    ),
    'input[type="checkbox"]',
  );
});
