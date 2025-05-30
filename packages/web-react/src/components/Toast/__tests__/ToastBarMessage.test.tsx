import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ariaAttributesTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import ToastBarMessage from '../ToastBarMessage';

describe('ToastBarMessage', () => {
  stylePropsTest(ToastBarMessage);

  restPropsTest(ToastBarMessage, 'div');

  validHtmlAttributesTest(ToastBarMessage);

  ariaAttributesTest(ToastBarMessage);

  beforeEach(() => {
    render(<ToastBarMessage>Example children</ToastBarMessage>);
  });

  it('should render children', () => {
    expect(screen.getByText('Example children')).toBeInTheDocument();
  });

  it('should render with truncate className', () => {
    expect(screen.getByText('Example children')).toHaveClass('text-truncate-multiline');
  });
});
