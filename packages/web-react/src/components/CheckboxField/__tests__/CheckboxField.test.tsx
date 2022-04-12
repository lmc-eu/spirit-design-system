import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxField from '../CheckboxField';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';

describe('CheckboxField', () => {
  classNamePrefixProviderTest(CheckboxField, 'CheckboxField');

  it('should have text classname', () => {
    const dom = render(<CheckboxField />);

    const element = dom.container.querySelector('div > span') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__text');
  });

  it('should have label classname', () => {
    const dom = render(<CheckboxField isLabelHidden />);

    const element = dom.container.querySelector('div > span > label') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__label');
  });

  it('should have hidden classname', () => {
    const dom = render(<CheckboxField isLabelHidden />);

    const element = dom.container.querySelector('div > span > label') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__label--hidden');
  });

  it('should have required classname', () => {
    const dom = render(<CheckboxField isRequired />);

    const element = dom.container.querySelector('div > span > label') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__label--required');
  });

  it('should have input classname', () => {
    const dom = render(<CheckboxField />);

    const element = dom.container.querySelector('input') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__input');
  });

  it('should have message', () => {
    const dom = render(<CheckboxField message="text" />);

    const element = dom.container.querySelector('.CheckboxField__message') as HTMLElement;
    expect(element.textContent).toBe('text');
  });

  it('should have error classname', () => {
    const dom = render(<CheckboxField validationState="error" />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('CheckboxField--error');
  });
});
