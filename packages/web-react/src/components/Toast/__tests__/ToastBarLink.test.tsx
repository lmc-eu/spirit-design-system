import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import ToastBarLink from '../ToastBarLink';

describe('ToastBarLink', () => {
  stylePropsTest(ToastBarLink);

  restPropsTest(ToastBarLink, 'a');

  validHtmlAttributesTest(ToastBarLink);

  beforeEach(() => {
    render(<ToastBarLink href="#example-href">Example action</ToastBarLink>);
  });

  it('should render with correct href', () => {
    const element = screen.getByRole('link');

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('href', '#example-href');
  });

  it('should render children', () => {
    expect(screen.getByText('Example action')).toBeInTheDocument();
  });

  it('should render with correct classnames', () => {
    const element = screen.getByRole('link');

    expect(element).toHaveClass('link-underlined');
    expect(element).toHaveClass('ToastBar__link');
  });
});
