import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import {
  classNamePrefixProviderTest,
  validationStatePropsTest,
  itemPropsTest,
  requiredPropsTest,
  restPropsTest,
  stylePropsTest,
} from '@local/tests';
import Radio from '../Radio';

describe('Radio', () => {
  classNamePrefixProviderTest(Radio, 'Radio');

  itemPropsTest(Radio);

  stylePropsTest(Radio);

  restPropsTest(Radio, 'input');

  validationStatePropsTest(Radio, 'Radio--');

  requiredPropsTest(Radio, 'radio', 'id', 'example-id');

  it('should have label classname', () => {
    const dom = render(<Radio id="radio" label="label" />);

    const element = dom.container.querySelector('label > span > span:first-child') as HTMLElement;
    expect(element).toHaveClass('Radio__label');
  });

  it('should have hidden classname', () => {
    const dom = render(<Radio id="radio" label="hidden label" isLabelHidden />);

    const element = dom.container.querySelector('label > span > span:first-child') as HTMLElement;
    expect(element).toHaveClass('Radio__label--hidden');
  });

  it('should have input classname', () => {
    const dom = render(<Radio id="radio" label="label" />);

    const element = dom.container.querySelector('input') as HTMLElement;
    expect(element).toHaveClass('Radio__input');
  });

  it('should have helper text', () => {
    const dom = render(<Radio id="radio" label="Label" helperText="text" />);

    const element = dom.container.querySelector('.Radio__helperText') as HTMLElement;
    expect(element.textContent).toBe('text');
  });
});
