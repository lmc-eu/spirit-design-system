import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '../TextField';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';
import { TextFieldType, ValidationState } from '../../../types';

describe('TextField', () => {
  describe.each([
    ['text', 'Text'],
    ['password', 'Password'],
  ])('input type %s', (type, expectedClassPrefix) => {
    it('should have default classname', () => {
      const dom = render(<TextField type={type as TextFieldType} />);

      const element = dom.container.querySelector('div') as HTMLElement;
      expect(element).toHaveClass(`${expectedClassPrefix}Field`);
    });

    it('should have classname with lmc prefix', () => {
      const dom = render(
        <ClassNamePrefixProvider value="lmc">
          <TextField type={type as TextFieldType} />
        </ClassNamePrefixProvider>,
      );

      const element = dom.container.querySelector('div') as HTMLElement;
      expect(element).toHaveClass(`lmc-${expectedClassPrefix}Field`);
    });

    it('should have label classname', () => {
      const dom = render(<TextField type={type as TextFieldType} />);

      const element = dom.container.querySelector('label') as HTMLElement;
      expect(element).toHaveClass(`${expectedClassPrefix}Field__label`);
    });

    it('should have hidden classname', () => {
      const dom = render(<TextField type={type as TextFieldType} isLabelHidden />);

      const element = dom.container.querySelector('label') as HTMLElement;
      expect(element).toHaveClass(`${expectedClassPrefix}Field__label--hidden`);
    });

    it('should have required classname', () => {
      const dom = render(<TextField type={type as TextFieldType} isRequired />);

      const element = dom.container.querySelector('label') as HTMLElement;
      expect(element).toHaveClass(`${expectedClassPrefix}Field__label--required`);
    });

    it('should have input classname', () => {
      const dom = render(<TextField type={type as TextFieldType} />);

      const element = dom.container.querySelector('input') as HTMLElement;
      expect(element).toHaveClass(`${expectedClassPrefix}Field__input`);
    });

    it('should have message', () => {
      const dom = render(<TextField type={type as TextFieldType} message="text" />);

      const element = dom.container.querySelector(`.${expectedClassPrefix}Field__message`) as HTMLElement;
      expect(element.textContent).toBe('text');
    });

    it.each([['success'], ['warning'], ['error']])('should have %s classname', (validationState) => {
      const dom = render(
        <TextField type={type as TextFieldType} validationState={validationState as ValidationState} />,
      );

      const element = dom.container.querySelector('div') as HTMLElement;
      expect(element).toHaveClass(`${expectedClassPrefix}Field--${validationState}`);
    });
  });
});
