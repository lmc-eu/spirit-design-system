import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { validationStatePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { validationTextPropsTest } from '../../../../tests/providerTests/validationTextPropsTest';
import TextArea from '../TextArea';

describe('TextArea', () => {
  classNamePrefixProviderTest(TextArea, 'TextArea');

  stylePropsTest(TextArea);

  restPropsTest(TextArea, 'textarea');

  validationStatePropsTest(TextArea, 'TextArea--');

  validationTextPropsTest(TextArea, '.TextArea__validationText');

  it('should have label classname', () => {
    const dom = render(<TextArea id="textarea" label="Label" />);

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('TextArea__label');
  });

  it('should have hidden classname', () => {
    const dom = render(<TextArea id="textarea" label="Label" isLabelHidden />);

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('TextArea__label--hidden');
  });

  it('should have required classname', () => {
    const dom = render(<TextArea id="textarea" label="Label" isRequired />);

    const element = dom.container.querySelector('label') as HTMLElement;
    expect(element).toHaveClass('TextArea__label--required');
  });

  it('should have input classname', () => {
    const dom = render(<TextArea id="textarea" label="Label" />);

    const element = dom.container.querySelector('textarea') as HTMLElement;
    expect(element).toHaveClass('TextArea__input');
  });

  it('should have helper text', () => {
    const dom = render(<TextArea id="textarea" label="Label" helperText="helper text" />);

    const element = dom.container.querySelector('.TextArea__helperText') as HTMLElement;
    expect(element.textContent).toBe('helper text');
  });

  it('should have fluid classname', () => {
    const dom = render(<TextArea id="textarea" label="Label" isFluid />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('TextArea--fluid');
  });
});
