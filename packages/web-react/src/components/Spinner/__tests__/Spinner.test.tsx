import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '#local/tests';
import { TextColors } from '../../../constants';
import { TextColorsDictionaryType } from '../../../types';
import Spinner from '../Spinner';

jest.mock('../../../hooks/useIcon');

describe('Spinner', () => {
  classNamePrefixProviderTest(Spinner, 'animation-spin-clockwise');

  stylePropsTest(Spinner);

  restPropsTest(Spinner, 'svg');

  it('should have correct classes', () => {
    render(<Spinner data-testid="Spinner" />);

    expect(screen.getByTestId('Spinner')).toHaveClass('animation-spin-clockwise');
  });

  it('should have correct width and height', () => {
    const boxSize = 33;
    render(<Spinner name="add" boxSize={boxSize} data-testid="Spinner" />);

    expect(screen.getByTestId('Spinner')).toHaveAttribute('width', boxSize.toString());
    expect(screen.getByTestId('Spinner')).toHaveAttribute('height', boxSize.toString());
  });

  it.each([Object.values(TextColors)])('should render text color %s', async (color) => {
    render(<Spinner color={color as TextColorsDictionaryType} data-testid="Spinner" />);

    expect(screen.getByTestId('Spinner')).toHaveClass(`text-${color}`);
  });
});
