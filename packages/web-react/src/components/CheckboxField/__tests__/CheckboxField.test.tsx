import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import CheckboxField from '../CheckboxField';

describe('CheckboxField', () => {
  classNamePrefixProviderTest(CheckboxField, 'CheckboxField');

  stylePropsTest(CheckboxField);

  restPropsTest(CheckboxField, 'input');

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
