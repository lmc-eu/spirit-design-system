import React from 'react';
import { accessibilityDisabledTest, accessibilityTest, accessibilityValidationStateTest } from '@local/tests';
import UncontrolledSlider from '../UncontrolledSlider';

describe('UncontrolledSlider accessibility', () => {
  accessibilityTest(
    (props) => <UncontrolledSlider {...props} id="slider-uncontrolled" label="Label" />,
    'input[type="range"]',
  );

  accessibilityDisabledTest(
    (props) => <UncontrolledSlider {...props} id="slider-uncontrolled-disabled" label="Label" />,
    'input[type="range"]',
  );

  accessibilityValidationStateTest(
    (props) => (
      <UncontrolledSlider
        {...props}
        id="slider-uncontrolled-validation"
        label="Label"
        validationText="Validation text"
      />
    ),
    'input[type="range"]',
  );
});
