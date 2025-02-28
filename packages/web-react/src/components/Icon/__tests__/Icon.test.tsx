import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest, stylePropsTest } from '@local/tests';
import Icon from '../Icon';

jest.mock('../../../hooks/useIcon');

describe('Icon', () => {
  const AddIcon = (props: Record<string, unknown>) => <Icon {...props} name="add" data-testid="test-icon" />;

  stylePropsTest(AddIcon, 'test-icon');

  restPropsTest((props: Record<string, unknown>) => <Icon {...props} name="add" />, 'svg');

  it('should have default width, height, aria', () => {
    render(<Icon name="add" data-testid="test-icon" />);
    const icon = screen.getByTestId('test-icon');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('should have correct width and height', () => {
    const boxSize = 33;
    render(<Icon name="add" boxSize={boxSize} data-testid="test-icon" />);

    expect(screen.getByTestId('test-icon')).toHaveAttribute('width', boxSize.toString());
    expect(screen.getByTestId('test-icon')).toHaveAttribute('height', boxSize.toString());
  });

  it('should have title', () => {
    const boxSize = 33;
    render(<Icon name="add" boxSize={boxSize} data-testid="test-icon" title="Icon Title" />);
    const titleElement = screen.getByTestId('test-icon').querySelector('title');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Icon Title');
  });

  it('should have correct width and height with responsive sizes', () => {
    const boxSize = { mobile: 20, tablet: 40, desktop: 60 };
    render(<Icon name="add" boxSize={boxSize} data-testid="test-icon" />);

    expect(screen.getByTestId('test-icon')).toHaveAttribute('width', boxSize.mobile.toString());
    expect(screen.getByTestId('test-icon')).toHaveAttribute('height', boxSize.mobile.toString());
  });

  it('should have custom styles', () => {
    const boxSize = { desktop: 60 };
    render(<Icon name="add" boxSize={boxSize} data-testid="test-icon" />);

    expect(screen.getByTestId('test-icon')).toHaveStyle({
      '--spirit-icon-height-desktop': '60px',
      '--spirit-icon-width-desktop': '60px',
    });
  });
});
