import React from 'react';
import { accessibilityDisabledTest, accessibilityTest, accessibilityValidationStateTest } from '@local/tests';
import Radio from '../Radio';

describe('Radio accessibility', () => {
  accessibilityTest((props) => <Radio {...props} id="radio" label="Label" />, 'input');

  accessibilityDisabledTest((props) => <Radio {...props} id="radio-disabled" label="Label" />, 'input');

  accessibilityValidationStateTest((props) => <Radio {...props} id="radio-validation" label="Label" />, 'input');
});
