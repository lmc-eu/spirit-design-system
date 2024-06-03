import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { validationStatePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { validationTextPropsTest } from '../../../../tests/providerTests/validationTextPropsTest';
import { TextFieldType } from '../../../types';
import TextField from '../TextField';

describe('TextField', () => {
  describe.each(['text', 'password', 'email'])('input type %s', (type) => {
    classNamePrefixProviderTest(TextField, 'TextField');

    stylePropsTest(TextField);

    restPropsTest(TextField, 'input');

    validationStatePropsTest(TextField, 'TextField--');

    validationTextPropsTest(TextField, '.TextField__validationText', type as TextFieldType);

    it('should have label classname', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} />);

      const element = dom.container.querySelector('label') as HTMLElement;
      expect(element).toHaveClass('TextField__label');
    });

    it('should have hidden classname', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} isLabelHidden />);

      const element = dom.container.querySelector('label') as HTMLElement;
      expect(element).toHaveClass('TextField__label--hidden');
    });

    it('should have required classname', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} isRequired />);

      const element = dom.container.querySelector('label') as HTMLElement;
      expect(element).toHaveClass('TextField__label--required');
    });

    it('should have input classname', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} />);

      const element = dom.container.querySelector('input') as HTMLElement;
      expect(element).toHaveClass('TextField__input');
    });

    it('should have helper text', () => {
      const dom = render(
        <TextField id="textfield" label="Label" type={type as TextFieldType} helperText="helper text" />,
      );

      const element = dom.container.querySelector('.TextField__helperText') as HTMLElement;
      expect(element.textContent).toBe('helper text');
    });

    it('should have password toggle', () => {
      const dom = render(<TextField id="textfield" label="Label" hasPasswordToggle />);

      const element = dom.container.querySelector('.TextField__passwordToggle') as HTMLElement;
      expect(element).toBeInTheDocument();
    });

    it('should have password toggle button', () => {
      const dom = render(<TextField id="textfield" label="Label" hasPasswordToggle />);

      const element = dom.container.querySelector('.TextField__passwordToggle__button') as HTMLElement;
      expect(element).toBeInTheDocument();
    });

    it('should have type password with password toggle', () => {
      const dom = render(<TextField id="textfield" label="Label" hasPasswordToggle />);

      const element = dom.container.querySelector('input') as HTMLElement;
      expect(element).toHaveAttribute('type', 'password');
    });

    it('should have correct aria label of the password toggle', () => {
      const dom = render(<TextField id="textfield" label="Label" hasPasswordToggle />);

      const element = dom.container.querySelector('.TextField__passwordToggle__button') as HTMLElement;
      expect(element).toHaveAttribute('aria-label', 'Show password');
    });

    it('should toggle type with password toggle', () => {
      const dom = render(<TextField id="textfield" label="Label" hasPasswordToggle />);

      const element = dom.container.querySelector('input') as HTMLElement;
      const trigger = dom.container.querySelector('.TextField__passwordToggle__button') as HTMLElement;

      expect(element).toHaveAttribute('type', 'password');
      fireEvent.click(trigger);
      expect(element).toHaveAttribute('type', 'text');
    });

    it('should toggle aria label of the password toggle', () => {
      const dom = render(<TextField id="textfield" label="Label" hasPasswordToggle />);

      const element = dom.container.querySelector('.TextField__passwordToggle__button') as HTMLElement;

      expect(element).toHaveAttribute('aria-label', 'Show password');
      fireEvent.click(element);
      expect(element).toHaveAttribute('aria-label', 'Hide password');
    });

    it('should have fluid classname', () => {
      const dom = render(<TextField id="textfield" label="Label" type={type as TextFieldType} isFluid />);

      const element = dom.container.querySelector('div') as HTMLElement;
      expect(element).toHaveClass('TextField--fluid');
    });
  });
});
