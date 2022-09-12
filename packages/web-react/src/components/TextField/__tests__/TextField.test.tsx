import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { TextFieldType, ValidationState } from '../../../types';
import TextField from '../TextField';

describe('TextField', () => {
  describe.each(['text', 'password', 'email'])('input type %s', (type) => {
    classNamePrefixProviderTest(TextField, 'TextField');

    stylePropsTest(TextField);

    restPropsTest(TextField, 'input');

    it('should have label classname', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} />);

      const element = dom.container.querySelector('label') as HTMLElement;
      expect(element).toHaveClass(`TextField__label`);
    });

    it('should have hidden classname', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} isLabelHidden />);

      const element = dom.container.querySelector('label') as HTMLElement;
      expect(element).toHaveClass(`TextField__label--hidden`);
    });

    it('should have required classname', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} isRequired />);

      const element = dom.container.querySelector('label') as HTMLElement;
      expect(element).toHaveClass(`TextField__label--required`);
    });

    it('should have input classname', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} />);

      const element = dom.container.querySelector('input') as HTMLElement;
      expect(element).toHaveClass(`TextField__input`);
    });

    it('should have message', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} message="text" />);

      const element = dom.container.querySelector(`.TextField__message`) as HTMLElement;
      expect(element.textContent).toBe('text');
    });

    it('should have fluid classname', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} isFluid />);

      const element = dom.container.querySelector('div') as HTMLElement;
      expect(element).toHaveClass('TextField--fluid');
    });

    it.each([['success'], ['warning'], ['error']])('should have %s classname', (validationState) => {
      const dom = render(
        <TextField
          id="textfield"
          label="Label"
          type={type as TextFieldType}
          validationState={validationState as ValidationState}
        />,
      );

      const element = dom.container.querySelector('div') as HTMLElement;
      expect(element).toHaveClass(`TextField--${validationState}`);
    });
  });
});
