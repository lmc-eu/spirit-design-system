import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
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
    expect(element).toHaveClass('ToastBar');
    expect(element).toHaveClass('ToastBar--inverted');
  });

  it('should render text children', () => {
    render(<ToastBar id="test">Hello World</ToastBar>);

    const element = screen.getByText('Hello World');

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('ToastBar__content');
    expect(element).toContainHTML('div');
    expect(element.parentElement).toHaveClass('ToastBar__container');
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
