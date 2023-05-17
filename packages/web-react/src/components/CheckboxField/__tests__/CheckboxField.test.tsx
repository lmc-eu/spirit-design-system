import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { itemPropsTest } from '../../../../tests/providerTests/itemPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { validationStatePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { validationTextPropsTest } from '../../../../tests/providerTests/validationTextPropsTest';
import CheckboxField from '../CheckboxField';

describe('CheckboxField', () => {
  classNamePrefixProviderTest(CheckboxField, 'CheckboxField');

  itemPropsTest(CheckboxField);

  stylePropsTest(CheckboxField);

  restPropsTest(CheckboxField, 'input');

  validationStatePropsTest(CheckboxField, 'CheckboxField--');

  validationTextPropsTest(CheckboxField, '.CheckboxField__message');

  it('should have text classname', () => {
    const dom = render(<CheckboxField id="checkbox" label="Label" />);

    const element = dom.container.querySelector('label > span') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__text');
  });

  it('should have label classname', () => {
    const dom = render(<CheckboxField id="checkbox" label="Label" isLabelHidden />);

    const element = dom.container.querySelector('label > span > span:first-child') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__label');
  });

  it('should have hidden classname', () => {
    const dom = render(<CheckboxField id="checkbox" label="Label" isLabelHidden />);

    const element = dom.container.querySelector('label > span > span:first-child') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__label--hidden');
  });

  it('should have required classname', () => {
    const dom = render(<CheckboxField id="checkbox" label="Label" isRequired />);

    const element = dom.container.querySelector('label > span > span:first-child') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__label--required');
  });

  it('should have input classname', () => {
    const dom = render(<CheckboxField id="checkbox" label="Label" />);

    const element = dom.container.querySelector('input') as HTMLElement;
    expect(element).toHaveClass('CheckboxField__input');
  });

  it('should have helper text', () => {
    const dom = render(<CheckboxField id="checkbox" label="Label" helperText="text" />);

    const element = dom.container.querySelector('.CheckboxField__helperText') as HTMLElement;
    expect(element.textContent).toBe('text');
  });
});
