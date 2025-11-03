import React from 'react';
import { accessibilityDisabledTest, accessibilityTest, accessibilityValidationStateTest } from '@local/tests';
import TextField from '../TextField';

jest.mock('../../../hooks/useIcon');

describe('TextField accessibility', () => {
  accessibilityTest((props) => <TextField {...props} id="textfield" label="Text field" />, 'input');

  accessibilityDisabledTest(
    (props) => <TextField {...props} id="textfield-email" label="Email address" type="email" />,
    'input',
  );

  accessibilityValidationStateTest(
    (props) => (
      <TextField
        {...props}
        id="textfield-password"
        label="Password"
        validationText="Validation text"
        hasPasswordToggle
      />
    ),
    'input',
  );
});
