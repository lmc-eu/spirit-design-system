import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import Dropdown from '../Dropdown';
import DropdownPopover from '../DropdownPopover';
import DropdownTrigger from '../DropdownTrigger';

describe('Dropdown', () => {
  classNamePrefixProviderTest(Dropdown, 'Dropdown');

  stylePropsTest(
    (props: Record<string, unknown>) => (
      <Dropdown id="dropdown" isOpen={false} onToggle={() => {}} {...props} data-testid="test-dropdown" />
    ),
    'test-dropdown',
  );

  restPropsTest(Dropdown, '.Dropdown');

  it('should render text children', () => {
    const dom = render(
      <Dropdown id="dropdown" isOpen={false} onToggle={() => {}}>
        <DropdownTrigger>Trigger</DropdownTrigger>
        <DropdownPopover>Hello World</DropdownPopover>
      </Dropdown>,
    );
    const trigger = screen.getByRole('button');
    const element = dom.container.querySelector('.DropdownPopover') as HTMLElement;

    expect(trigger).toHaveTextContent('Trigger');
    expect(element).toHaveTextContent('Hello World');
  });

  it('should be opened', () => {
    const onToggle = jest.fn();

    const dom = render(
      <Dropdown id="dropdown" isOpen onToggle={onToggle}>
        <DropdownTrigger>trigger</DropdownTrigger>
        <DropdownPopover>Hello World</DropdownPopover>
      </Dropdown>,
    );
    const element = dom.container.querySelector('.DropdownPopover') as HTMLElement;
    const trigger = screen.getByRole('button');

    expect(element).toHaveClass('is-open');
    expect(trigger).toHaveClass('is-expanded');
  });

  it('should call toggle function', () => {
    const onToggle = jest.fn();

    const dom = render(
      <Dropdown id="dropdown" isOpen={false} onToggle={onToggle}>
        <DropdownTrigger>trigger</DropdownTrigger>
        <DropdownPopover>Hello World</DropdownPopover>
      </Dropdown>,
    );
    const trigger = dom.container.querySelector('button') as HTMLElement;

    fireEvent.click(trigger);

    expect(onToggle).toHaveBeenCalled();
  });
});
