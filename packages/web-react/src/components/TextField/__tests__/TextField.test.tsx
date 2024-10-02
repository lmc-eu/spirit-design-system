import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
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
      render(<TextField id="textfield" label="Label" type={type as TextFieldType} />);

      expect(screen.getByText('Label')).toHaveClass('TextField__label');
    });

    it('should have disabled classname na prop', () => {
      render(<TextField id="textfield" label="Label" type={type as TextFieldType} isDisabled />);

      expect(screen.getByLabelText('Label').parentElement).toHaveClass('TextField--disabled');
      expect(screen.getByLabelText('Label')).toHaveAttribute('disabled');
    });

    it('should have hidden classname', () => {
      render(<TextField id="textfield" label="Label" type={type as TextFieldType} isLabelHidden />);

      expect(screen.getByText('Label')).toHaveClass('TextField__label--hidden');
    });

    it('should have required classname', () => {
      render(<TextField id="textfield" label="Label" type={type as TextFieldType} isRequired />);

      expect(screen.getByText('Label')).toHaveClass('TextField__label--required');
      expect(screen.getByLabelText('Label')).toHaveAttribute('required');
    });

    it('should have input classname', () => {
      render(<TextField id="textfield" label="Label" type={type as TextFieldType} />);

      expect(screen.getByLabelText('Label')).toHaveClass('TextField__input');
    });

    it('should have helper text', () => {
      render(<TextField id="textfield" label="Label" type={type as TextFieldType} helperText="helper text" />);

      expect(screen.getByText('helper text')).toHaveClass('TextField__helperText');
    });

    it('should have fluid classname', () => {
      render(<TextField id="textfield" label="Label" type={type as TextFieldType} isFluid />);

      expect(screen.getByLabelText('Label').parentElement).toHaveClass('TextField--fluid');
    });
  });

  describe('hasPasswordToggle', () => {
    beforeEach(() => {
      render(<TextField id="textfield" label="Label" hasPasswordToggle />);
    });

    it('should have password toggle button', () => {
      expect(screen.getByRole('switch')).toHaveClass('TextField__passwordToggle__button');
    });

    it('should have type password with password toggle', () => {
      expect(screen.getByLabelText('Label')).toHaveAttribute('type', 'password');
    });

    it('should have correct aria label of the password toggle', () => {
      expect(screen.getByRole('switch')).toHaveAttribute('aria-label', 'Show password');
    });

    it('should toggle type with password toggle', () => {
      const element = screen.getByLabelText('Label');

      expect(element).toHaveAttribute('type', 'password');
      fireEvent.click(screen.getByRole('switch'));
      expect(element).toHaveAttribute('type', 'text');
    });

    it('should toggle aria label of the password toggle', () => {
      const element = screen.getByRole('switch');

      expect(element).toHaveAttribute('aria-label', 'Show password');
      fireEvent.click(element);
      expect(element).toHaveAttribute('aria-label', 'Hide password');
    });
  });

  describe('hasPasswordToggle isDisabled', () => {
    it('should have disabled attribute on input and toggle button', () => {
      render(<TextField id="textfield" label="Label" hasPasswordToggle isDisabled />);

      expect(screen.getByText('Label').parentElement).toHaveClass('TextField--disabled');
      expect(screen.getByLabelText('Label')).toHaveAttribute('disabled');
      expect(screen.getByRole('switch')).toHaveAttribute('disabled');
    });
  });
});
