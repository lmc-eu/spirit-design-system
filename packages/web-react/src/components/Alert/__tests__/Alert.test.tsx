import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { emotionColorPropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import Alert from '../Alert';

describe('Alert', () => {
  classNamePrefixProviderTest(Alert, 'Alert');

  stylePropsTest(Alert);

  emotionColorPropsTest(Alert, 'Alert--');

  restPropsTest(Alert, 'div');

  it('should have default classname', () => {
    const dom = render(<Alert />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Alert--success');
  });

  it('should render text children', () => {
    const dom = render(<Alert>Hello World</Alert>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should have icon', () => {
    const dom = render(<Alert>Hello World</Alert>);

    const element = dom.container.querySelector('svg') as SVGSVGElement;
    expect(element).toBeInTheDocument();
  });
});
