import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { validationStatePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { validationTextPropsTest } from '../../../../tests/providerTests/validationTextPropsTest';
import Select from '../Select';
import { requiredPropsTest } from '../../../../tests/providerTests/requiredPropsTest';

describe('Select', () => {
  classNamePrefixProviderTest(Select, 'Select');

  stylePropsTest(Select);

  restPropsTest(Select, 'select');

  validationStatePropsTest(Select, 'Select--');

  validationTextPropsTest(Select, '.Select__validationText');

  requiredPropsTest(Select, 'combobox', 'id', 'test-select');

  it('should have label classname', () => {
    const dom = render(
      <Select id="test-select" label="Label">
        <option value="1">Option 1</option>
      </Select>,
    );

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('Select__label');
  });

  it('should have hidden classname', () => {
    const dom = render(
      <Select id="test-select" label="Label" isLabelHidden>
        <option value="1">Option 1</option>
      </Select>,
    );

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('Select__label--hidden');
  });

  it('should have required classname', () => {
    const dom = render(
      <Select id="test-select" label="Label" isRequired>
        <option value="1">Option 1</option>
      </Select>,
    );

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('Select__label--required');
  });

  it('should have input classname', () => {
    const dom = render(
      <Select id="test-select" label="Label">
        <option value="1">Option 1</option>
      </Select>,
    );

    const element = dom.container.querySelector('select') as HTMLElement;
    expect(element).toHaveClass('Select__input');
  });

  it('should have helper text', () => {
    const dom = render(
      <Select id="test-select" label="Label" helperText="helper text">
        <option value="1">Option 1</option>
      </Select>,
    );

    const element = dom.container.querySelector('.Select__helperText') as HTMLElement;
    expect(element.textContent).toBe('helper text');
  });

  it('should have fluid classname', () => {
    const dom = render(
      <Select id="test-select" label="Label" isFluid>
        <option value="1">Option 1</option>
      </Select>,
    );

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Select--fluid');
  });
});
