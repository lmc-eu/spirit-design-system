import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { itemPropsTest } from '../../../../tests/providerTests/itemPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { validationStatePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { validationTextPropsTest } from '../../../../tests/providerTests/validationTextPropsTest';
import Checkbox from '../Checkbox';
import { requiredPropsTest } from '../../../../tests/providerTests/requiredPropsTest';

describe('Checkbox', () => {
  classNamePrefixProviderTest(Checkbox, 'Checkbox');

  itemPropsTest(Checkbox);

  stylePropsTest(Checkbox);

  restPropsTest(Checkbox, 'input');

  validationStatePropsTest(Checkbox, 'Checkbox--');

  validationTextPropsTest(Checkbox, '.Checkbox__validationText');

  requiredPropsTest(Checkbox, 'checkbox', 'id', 'test-checkbox');

  it('should have text classname', () => {
    const dom = render(<Checkbox id="checkbox" label="Label" />);

    const element = dom.container.querySelector('label > span') as HTMLElement;
    expect(element).toHaveClass('Checkbox__text');
  });

  it('should have label classname', () => {
    const dom = render(<Checkbox id="checkbox" label="Label" isLabelHidden />);

    const element = dom.container.querySelector('label > span > span:first-child') as HTMLElement;
    expect(element).toHaveClass('Checkbox__label');
  });

  it('should have hidden classname', () => {
    const dom = render(<Checkbox id="checkbox" label="Label" isLabelHidden />);

    const element = dom.container.querySelector('label > span > span:first-child') as HTMLElement;
    expect(element).toHaveClass('Checkbox__label--hidden');
  });

  it('should have required classname', () => {
    const dom = render(<Checkbox id="checkbox" label="Label" isRequired />);

    const element = dom.container.querySelector('label > span > span:first-child') as HTMLElement;
    expect(element).toHaveClass('Checkbox__label--required');
  });

  it('should have input classname', () => {
    render(<Checkbox id="checkbox" label="Label" />);

    const element = screen.getByRole('checkbox');
    expect(element).toHaveClass('Checkbox__input');
  });

  it('should have helper text', () => {
    render(<Checkbox id="checkbox" label="Label" helperText="text" />);

    const element = screen.getByText('text');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('Checkbox__helperText');
  });
});
