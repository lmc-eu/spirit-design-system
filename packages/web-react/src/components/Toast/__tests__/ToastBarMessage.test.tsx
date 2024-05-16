import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ToastBarMessage from '../ToastBarMessage';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';

describe('ToastBarMessage', () => {
  stylePropsTest(ToastBarMessage);

  restPropsTest(ToastBarMessage, 'div');

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
