import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { Button } from '../../Button';
import DropdownTrigger from '../DropdownTrigger';

jest.mock('../../../hooks', () => {
  return {
    ...jest.requireActual('../../../hooks'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useIcon: (name: string) => '',
  };
});

describe('DropdownTrigger', () => {
  stylePropsTest((props) => <DropdownTrigger elementType={Button} {...props} />);

  restPropsTest((props) => <DropdownTrigger elementType={Button} {...props} />, 'button');

  it('should have Button elementType', () => {
    const dom = render(<DropdownTrigger elementType={Button}>Trigger</DropdownTrigger>);
    const trigger = dom.container.querySelector('button') as HTMLElement;

    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveClass('Button');
  });

  it('should have children', () => {
    const dom = render(<DropdownTrigger elementType={Button}>Trigger</DropdownTrigger>);
    const trigger = dom.container.querySelector('button') as HTMLElement;

    expect(trigger).toHaveTextContent('Trigger');
  });
});
