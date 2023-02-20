import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { ValidationState, ValidationStates } from '../../../types';
import TextArea from '../TextArea';

describe('TextArea', () => {
  classNamePrefixProviderTest(TextArea, 'TextArea');

  stylePropsTest(TextArea);

  restPropsTest(TextArea, 'textarea');

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

  it('should have message', () => {
    const dom = render(<TextArea id="textarea" label="Label" message="text" />);

    const element = dom.container.querySelector('.TextArea__message') as HTMLElement;
    expect(element.textContent).toBe('text');
  });

  it('should have fluid classname', () => {
    const dom = render(<TextArea id="textarea" label="Label" isFluid />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('TextArea--fluid');
  });

  // @deprecated Will be removed in next major version.
  it.each([ValidationStates.SUCCESS, ValidationStates.WARNING, ValidationStates.DANGER, ['error']])(
    'should have %s classname',
    (validationState) => {
      const dom = render(<TextArea id="textarea" label="Label" validationState={validationState as ValidationState} />);

      const element = dom.container.querySelector('div') as HTMLElement;
      expect(element).toHaveClass(`TextArea--${validationState}`);
    },
  );
});
