import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { itemPropsTest } from '../../../../tests/providerTests/itemPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { validationStatePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import RadioField from '../RadioField';

describe('RadioField', () => {
  classNamePrefixProviderTest(RadioField, 'RadioField');

  itemPropsTest(RadioField);

  stylePropsTest(RadioField);

  restPropsTest(RadioField, 'input');

  validationStatePropsTest(RadioField, 'RadioField--');

  it('should have label classname', () => {
    const dom = render(<RadioField id="radiofield" label="label" />);

    const element = dom.container.querySelector('label > span > span:first-child') as HTMLElement;
    expect(element).toHaveClass('RadioField__label');
  });

  it('should have hidden classname', () => {
    const dom = render(<RadioField id="radiofield" label="hidden label" isLabelHidden />);

    const element = dom.container.querySelector('label > span > span:first-child') as HTMLElement;
    expect(element).toHaveClass('RadioField__label--hidden');
  });

  it('should have input classname', () => {
    const dom = render(<RadioField id="radiofield" label="label" />);

    const element = dom.container.querySelector('input') as HTMLElement;
    expect(element).toHaveClass('RadioField__input');
  });

  it('should have helper text', () => {
    const dom = render(<RadioField id="radiofield" label="Label" helperText="text" />);

    const element = dom.container.querySelector('.RadioField__helperText') as HTMLElement;
    expect(element.textContent).toBe('text');
  });
});
