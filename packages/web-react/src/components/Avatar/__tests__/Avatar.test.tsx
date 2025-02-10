import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, sizeExtendedPropsTest, restPropsTest, stylePropsTest } from '@local/tests';
import { Icon } from '../../Icon';
import Avatar from '../Avatar';

jest.mock('../../../hooks/useIcon');

describe('Avatar', () => {
  classNamePrefixProviderTest(Avatar, 'Avatar');

  sizeExtendedPropsTest(Avatar);

  stylePropsTest(Avatar);

  restPropsTest(Avatar, 'div');

  it('should have default classname', () => {
    render(<Avatar title="Jiří Bárta">JB</Avatar>);

    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('Avatar');
  });

  it('should have default classname with elementType', () => {
    render(
      <Avatar elementType="a" href="#" title="Jiří Bárta">
        JB
      </Avatar>,
    );

    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('Avatar');
    expect(screen.getByTitle('Jiří Bárta')).toHaveAttribute('href', '#');
  });

  it('should have square classname with isSquare', () => {
    render(
      <Avatar isSquare title="Jiří Bárta">
        JB
      </Avatar>,
    );

    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('Avatar');
    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('Avatar--square');
  });

  it('should have size classname', () => {
    render(
      <Avatar size="xsmall" title="Jiří Bárta">
        JB
      </Avatar>,
    );

    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('Avatar');
    expect(screen.getByTitle('Jiří Bárta')).toHaveClass('Avatar--xsmall');
  });

  it('should render Icon', () => {
    render(
      <Avatar title="Jiří Bárta">
        <Icon name="profile" boxSize="20" />
      </Avatar>,
    );

    expect(screen.getByTitle('Jiří Bárta').querySelector('svg')).toBeInTheDocument();
  });

  it('should render text children', () => {
    render(<Avatar title="Jiří Bárta">JB</Avatar>);

    expect(screen.getByTitle('Jiří Bárta')).toHaveTextContent('JB');
  });

  it('should render image', () => {
    render(
      <Avatar title="Jiří Bárta">
        <img src="https://via.placeholder.com/150" alt="" data-testid="test-image" />
      </Avatar>,
    );

    expect(screen.getByTestId('test-image')).toBeInTheDocument();
  });
});
