import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import DropdownModern from '../DropdownModern';
import DropdownPopover from '../DropdownPopover';
import DropdownTrigger from '../DropdownTrigger';

describe('Dropdown', () => {
  classNamePrefixProviderTest(DropdownModern, 'DropdownWrapper');

  stylePropsTest(
    (props: Record<string, unknown>) => (
      <DropdownModern id="dropdown" isOpen={false} onToggle={() => {}} {...props} data-testid="test-dropdown" />
    ),
    'test-dropdown',
  );

  restPropsTest(DropdownModern, '.DropdownWrapper');

  it('should render text children', () => {
    const dom = render(
      <DropdownModern id="dropdown" isOpen={false} onToggle={() => {}}>
        <DropdownTrigger>Trigger</DropdownTrigger>
        <DropdownPopover>Hello World</DropdownPopover>
      </DropdownModern>,
    );
    const trigger = dom.container.querySelector('button') as HTMLElement;
    const element = dom.container.querySelector('.Dropdown') as HTMLElement;

    expect(trigger.textContent).toBe('Trigger');
    expect(element.textContent).toBe('Hello World');
  });

  it('should be opened', () => {
    const onToggle = jest.fn();

    const dom = render(
      <DropdownModern id="dropdown" isOpen onToggle={onToggle}>
        <DropdownTrigger>trigger</DropdownTrigger>
        <DropdownPopover>Hello World</DropdownPopover>
      </DropdownModern>,
    );
    const element = dom.container.querySelector('.Dropdown') as HTMLElement;
    const trigger = dom.container.querySelector('#dropdown') as HTMLElement;

    expect(element).toHaveClass('is-open');
    expect(trigger).toHaveClass('is-expanded');
  });

  it('should call toggle function', () => {
    const onToggle = jest.fn();

    const dom = render(
      <DropdownModern id="dropdown" isOpen={false} onToggle={onToggle}>
        <DropdownTrigger>trigger</DropdownTrigger>
        <DropdownPopover>Hello World</DropdownPopover>
      </DropdownModern>,
    );
    const trigger = dom.container.querySelector('#dropdown') as HTMLElement;

    fireEvent.click(trigger);

    expect(onToggle).toHaveBeenCalled();
  });
});
