import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, requiredPropsTest, validHtmlAttributesTest } from '@local/tests';
import { TextFieldType } from '../../../types';
import TextFieldBase from '../TextFieldBase';

describe('TextFieldBase', () => {
  classNamePrefixProviderTest(TextFieldBase, 'TextField');

  requiredPropsTest(TextFieldBase, 'textbox', 'id', 'textfieldbase');

  validHtmlAttributesTest(TextFieldBase);

  describe.each(['text', 'password', 'email'])('input type %s', (type) => {
    it('should have connected label and input', () => {
      const dom = render(<TextFieldBase id="textfield-base" label="Label" type={type as TextFieldType} />);

      const labelElement = dom.container.querySelector('label') as HTMLElement;
      expect(labelElement).toHaveAttribute('for', 'textfield-base');

      const inputElement = dom.container.querySelector('input') as HTMLElement;
      expect(inputElement).toHaveAttribute('id', 'textfield-base');
    });
  });
});
