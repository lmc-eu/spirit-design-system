import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import ToastBar from '../ToastBar';

describe('ToastBar', () => {
  classNamePrefixProviderTest((props) => <ToastBar {...props} id="test" />, 'ToastBar');

  stylePropsTest((props) => <ToastBar {...props} id="test" data-testid="toastbar-test" />, 'toastbar-test');

  restPropsTest((props) => <ToastBar {...props} id="test" />, 'div');

  it('should not render', () => {
    const dom = render(<ToastBar isOpen={false} id="test" />);

    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).not.toBeInTheDocument();
  });

  it('should render', () => {
    const dom = render(<ToastBar isOpen id="test" />);

    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toBeInTheDocument();
  });

  it('should render text children', () => {
    const dom = render(<ToastBar id="test">Hello World</ToastBar>);

    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('should render icon and have danger class', () => {
    const dom = render(
      <ToastBar id="test" color="danger" hasIcon isDismissible>
        Hello World
      </ToastBar>,
    );

    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toHaveClass('ToastBar--danger ToastBar--dismissible');

    const icon = dom.container.querySelector('svg') as SVGSVGElement;

    expect(icon).toBeInTheDocument();
  });
});
