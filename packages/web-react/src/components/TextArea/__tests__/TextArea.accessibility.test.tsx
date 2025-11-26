import React from 'react';
import { accessibilityDisabledTest, accessibilityTest, accessibilityValidationStateTest } from '@local/tests';
import TextArea from '../TextArea';

describe('TextArea accessibility', () => {
  accessibilityTest((props) => <TextArea {...props} id="textarea" label="Label" />, 'textarea');

  accessibilityDisabledTest((props) => <TextArea {...props} id="textarea-disabled" label="Label" />, 'textarea');

  accessibilityValidationStateTest(
    (props) => <TextArea {...props} id="textarea-validation" label="Label" validationText="Validation text" />,
    'textarea',
  );
});
