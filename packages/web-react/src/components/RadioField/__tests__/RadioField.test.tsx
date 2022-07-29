import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import RadioField from '../RadioField';

describe('RadioField', () => {
  classNamePrefixProviderTest(RadioField, 'RadioField');

  stylePropsTest(RadioField);

  restPropsTest(RadioField, 'input');

  it('should have label classname', () => {
    const dom = render(<RadioField label="label" />);

    const element = dom.container.querySelector('label > span') as HTMLElement;
    expect(element).toHaveClass('RadioField__label');
  });

  it('should have hidden classname', () => {
    const dom = render(<RadioField isLabelHidden label="hidden label" />);

    const element = dom.container.querySelector('label > span') as HTMLElement;
    expect(element).toHaveClass('RadioField__label--hidden');
  });

  it('should have input classname', () => {
    const dom = render(<RadioField label="label" />);

    const element = dom.container.querySelector('input') as HTMLElement;
    expect(element).toHaveClass('RadioField__input');
  });
});
