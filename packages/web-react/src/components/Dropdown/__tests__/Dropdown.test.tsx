import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
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
    render(
      <Dropdown id="dropdown" isOpen={false} onToggle={() => {}}>
        <DropdownTrigger>Trigger</DropdownTrigger>
        <DropdownPopover data-testid="test-popover">Hello World</DropdownPopover>
      </Dropdown>,
    );

    expect(screen.getByRole('button')).toHaveTextContent('Trigger');
    expect(screen.getByTestId('test-popover')).toHaveTextContent('Hello World');
  });

  it('should be opened', () => {
    const onToggle = jest.fn();

    render(
      <Dropdown id="dropdown" isOpen onToggle={onToggle}>
        <DropdownTrigger>trigger</DropdownTrigger>
        <DropdownPopover data-testid="test-popover">Hello World</DropdownPopover>
      </Dropdown>,
    );

    expect(screen.getByRole('button')).toHaveClass('is-expanded');
    expect(screen.getByTestId('test-popover')).toHaveClass('is-open');
  });

  it('should call toggle function', () => {
    const onToggle = jest.fn();

    render(
      <Dropdown id="dropdown" isOpen={false} onToggle={onToggle}>
        <DropdownTrigger>trigger</DropdownTrigger>
        <DropdownPopover>Hello World</DropdownPopover>
      </Dropdown>,
    );

    const trigger = screen.getByRole('button');

    fireEvent.click(trigger);

    expect(onToggle).toHaveBeenCalled();
  });

  it('should not have same id on trigger and popover', () => {
    render(
      <Dropdown id="dropdown" isOpen={false} onToggle={() => {}}>
        <DropdownTrigger>trigger</DropdownTrigger>
        <DropdownPopover data-testid="test-popover">Hello World</DropdownPopover>
      </Dropdown>,
    );

    expect(screen.getByRole('button')).not.toHaveAttribute('id', 'dropdown');
    expect(screen.getByTestId('test-popover')).toHaveAttribute('id', 'dropdown');
  });
});
