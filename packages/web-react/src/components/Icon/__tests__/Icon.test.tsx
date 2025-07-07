import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ariaAttributesTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import { toBeInDocumentProviderTest } from '@local/tests/providerTests/toBeInDocumentProviderTest';
import { SpiritIconProps } from '../../../types';
import Icon from '../Icon';

jest.mock('../../../hooks/useIcon');

describe('Icon', () => {
  const AddIcon = (props: SpiritIconProps) => <Icon {...props} name="add" title="Icon Title" data-testid="test-icon" />;

  stylePropsTest(AddIcon, 'test-icon');

  restPropsTest((props: SpiritIconProps) => <Icon {...props} name="add" />, 'svg');

  toBeInDocumentProviderTest(AddIcon, 'svg');

  toBeInDocumentProviderTest(AddIcon, 'title');

  validHtmlAttributesTest(AddIcon);

  ariaAttributesTest(AddIcon);

  describe('default props', () => {
    beforeEach(() => {
      render(<Icon name="add" data-testid="test-icon" />);
    });

    it('should have width', () => {
      expect(screen.getByTestId('test-icon')).toHaveAttribute('width', '24');
    });

    it('should have height', () => {
      expect(screen.getByTestId('test-icon')).toHaveAttribute('height', '24');
    });

    it('should have aria', () => {
      expect(screen.getByTestId('test-icon')).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('custom width and height', () => {
    const boxSize = 33;

    beforeEach(() => {
      render(<Icon name="add" boxSize={boxSize} data-testid="test-icon" />);
    });

    it('should have width', () => {
      expect(screen.getByTestId('test-icon')).toHaveAttribute('width', boxSize.toString());
    });

    it('should have height', () => {
      expect(screen.getByTestId('test-icon')).toHaveAttribute('height', boxSize.toString());
    });
  });

  it('should have title', () => {
    render(<Icon name="add" data-testid="test-icon" title="Icon Title" />);
    const titleElement = screen.getByTestId('test-icon').querySelector('title');

    expect(titleElement).toHaveTextContent('Icon Title');
  });

  describe('responsive width and height', () => {
    const boxSize = { mobile: 20, tablet: 40, desktop: 60 };

    beforeEach(() => {
      render(<Icon name="add" boxSize={boxSize} data-testid="test-icon" />);
    });

    it('should have height', () => {
      expect(screen.getByTestId('test-icon')).toHaveAttribute('height', boxSize.mobile.toString());
    });

    it('should have width', () => {
      expect(screen.getByTestId('test-icon')).toHaveAttribute('width', boxSize.mobile.toString());
    });
  });

  it('should have custom styles', () => {
    const boxSize = { desktop: 60 };
    render(<Icon name="add" boxSize={boxSize} data-testid="test-icon" />);

    expect(screen.getByTestId('test-icon')).toHaveStyle({
      '--spirit-icon-size-desktop': '60px',
    });
  });

  it('should pass `dualtoneColor` to `Icon` class list', () => {
    render(<Icon dualtoneColor="primary" name="shield-dualtone" data-testid="icon-dualtone" />);

    expect(screen.getByTestId('icon-dualtone')).toHaveClass(/Icon--dualtone-primary/);
  });
});
