import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { TextFieldType } from '../../../types';
import TextFieldBase from '../TextFieldBase';
import { requiredPropsTest } from '../../../../tests/providerTests/requiredPropsTest';

describe('TextFieldBase', () => {
  requiredPropsTest(TextFieldBase, 'textbox', 'id', 'textfieldbase');

  describe.each(['text', 'password', 'email'])('input type %s', (type) => {
    it('should have connected label and input', () => {
      const dom = render(<TextFieldBase id="textfieldbase" label="Label" type={type as TextFieldType} />);

      const labelElement = dom.container.querySelector('label') as HTMLElement;
      expect(labelElement).toHaveAttribute('for', 'textfieldbase');

      const inputElement = dom.container.querySelector('input') as HTMLElement;
      expect(inputElement).toHaveAttribute('id', 'textfieldbase');
    });
  });
});
