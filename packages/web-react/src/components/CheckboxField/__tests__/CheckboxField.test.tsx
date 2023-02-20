import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { itemPropsTest } from '../../../../tests/providerTests/itemPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import CheckboxField from '../CheckboxField';

describe('CheckboxField', () => {
  classNamePrefixProviderTest(CheckboxField, 'CheckboxField');

  itemPropsTest(CheckboxField);

  stylePropsTest(CheckboxField);

  restPropsTest(CheckboxField, 'input');

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

  it('should have message', () => {
    const dom = render(<CheckboxField id="checkbox" label="Label" message="text" />);

    const element = dom.container.querySelector('.CheckboxField__message') as HTMLElement;
    expect(element.textContent).toBe('text');
  });

  it('should have danger classname', () => {
    const dom = render(<CheckboxField id="checkbox" label="Label" validationState="danger" />);

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('CheckboxField--danger');
  });

  /* @deprecated Will be removed in next major version. */
  it('should have error classname', () => {
    const dom = render(<CheckboxField id="checkbox" label="Label" validationState="error" />);

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('CheckboxField--error');
  });
});
