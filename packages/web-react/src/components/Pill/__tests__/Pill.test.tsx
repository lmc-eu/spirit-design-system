import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, emotionColorPropsTest, restPropsTest, stylePropsTest } from '@local/tests';
import Pill from '../Pill';

describe('Pill', () => {
  classNamePrefixProviderTest(Pill, 'Pill');

  emotionColorPropsTest(Pill, 'Pill--');

  stylePropsTest(Pill);

  restPropsTest(Pill, 'span');

  it('should have default classname', () => {
    render(<Pill data-testid="pill" />);

    expect(screen.getByTestId('pill')).toHaveClass('Pill--selected');
  });

  it('should render text children', () => {
    render(<Pill>3</Pill>);

    expect(screen.getByText(3)).toBeInTheDocument();
  });

  it.each([['selected'], ['neutral'], ['danger'], ['informative'], ['success'], ['warning']])(
    'should render color %s',
    (color) => {
      render(<Pill color={color}>333</Pill>);

      expect(screen.getByText(333)).toHaveClass(`Pill--${color}`);
    },
  );
});
