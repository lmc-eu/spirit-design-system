import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest, stylePropsTest } from '@local/tests';
import { SpiritLabelProps } from '../../../types';
import Label from '../Label';

describe('Label', () => {
  stylePropsTest(Label);

  restPropsTest((props: SpiritLabelProps) => <Label {...props} />, 'label');

  it('should render children', () => {
    const label = 'Label';
    render(<Label data-testid="test">{label}</Label>);

    expect(screen.getByTestId('test')).toHaveTextContent(label);
  });

  it('should render as span', () => {
    render(<Label data-testid="test" elementType="span" />);

    expect(screen.getByTestId('test')).toContainHTML('span');
  });
});
