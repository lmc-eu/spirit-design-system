import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, sizeExtendedPropsTest, restPropsTest, stylePropsTest } from '@local/tests';
import { Icon } from '../../Icon';
import UNSTABLE_Avatar from '../UNSTABLE_Avatar';

jest.mock('../../../hooks/useIcon');

describe('UNSTABLE_Avatar', () => {
  classNamePrefixProviderTest(UNSTABLE_Avatar, 'UNSTABLE_Avatar');

  sizeExtendedPropsTest(UNSTABLE_Avatar);

  stylePropsTest(UNSTABLE_Avatar);

  restPropsTest(UNSTABLE_Avatar, 'div');

  it('should have default classname', () => {
    render(<UNSTABLE_Avatar title="Jiří Bárta">JB</UNSTABLE_Avatar>);

    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('UNSTABLE_Avatar');
  });

  it('should have default classname with elementType', () => {
    render(
      <UNSTABLE_Avatar elementType="a" href="#" title="Jiří Bárta">
        JB
      </UNSTABLE_Avatar>,
    );

    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('UNSTABLE_Avatar');
    expect(screen.getByTitle('Jiří Bárta')).toHaveAttribute('href', '#');
  });

  it('should have square classname with isSquare', () => {
    render(
      <UNSTABLE_Avatar isSquare title="Jiří Bárta">
        JB
      </UNSTABLE_Avatar>,
    );

    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('UNSTABLE_Avatar');
    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('UNSTABLE_Avatar--square');
  });

  it('should have size classname', () => {
    render(
      <UNSTABLE_Avatar size="xsmall" title="Jiří Bárta">
        JB
      </UNSTABLE_Avatar>,
    );

    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('UNSTABLE_Avatar');
    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('UNSTABLE_Avatar--xsmall');
  });

  it('should render Icon', () => {
    render(
      <UNSTABLE_Avatar title="Jiří Bárta">
        <Icon name="profile" boxSize="20" />
      </UNSTABLE_Avatar>,
    );

    expect(screen.getByTitle('Jiří Bárta').querySelector('svg')).toBeInTheDocument();
  });

  it('should render text children', () => {
    render(<UNSTABLE_Avatar title="Jiří Bárta">JB</UNSTABLE_Avatar>);

    expect(screen.getByTitle('Jiří Bárta')).toHaveTextContent('JB');
  });

  it('should render image', () => {
    render(
      <UNSTABLE_Avatar title="Jiří Bárta">
        <img src="https://via.placeholder.com/150" alt="" data-testid="test-image" />
      </UNSTABLE_Avatar>,
    );

    expect(screen.getByTestId('test-image')).toBeInTheDocument();
  });
});
