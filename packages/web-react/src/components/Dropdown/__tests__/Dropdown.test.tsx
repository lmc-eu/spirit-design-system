import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import { DropdownAlignmentXType, DropdownAlignmentYType } from '../../../types';
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
        <DropdownPopover data-testid="dropdown-popover">Hello World</DropdownPopover>
      </Dropdown>,
    );

    const trigger = screen.getByRole('button');
    const element = screen.getByTestId('dropdown-popover') as HTMLElement;

    expect(trigger).toHaveTextContent('Trigger');
    expect(element).toHaveTextContent('Hello World');
  });

  it('should be opened', () => {
    const onToggle = jest.fn();

    render(
      <Dropdown id="dropdown" isOpen onToggle={onToggle}>
        <DropdownTrigger>trigger</DropdownTrigger>
        <DropdownPopover data-testid="dropdown-popover">Hello World</DropdownPopover>
      </Dropdown>,
    );

    const element = screen.getByTestId('dropdown-popover') as HTMLElement;
    const trigger = screen.getByRole('button');

    expect(element).toHaveClass('is-open');
    expect(trigger).toHaveClass('is-expanded');
  });

  it('should call toggle function', () => {
    const onToggle = jest.fn();

    render(
      <Dropdown id="dropdown" isOpen={false} onToggle={onToggle}>
        <DropdownTrigger>trigger</DropdownTrigger>
        <DropdownPopover>Hello World</DropdownPopover>
      </Dropdown>,
    );

    const trigger = screen.getByRole('button') as HTMLElement;
    fireEvent.click(trigger);

    expect(onToggle).toHaveBeenCalled();
  });

  describe('Alignment tests', () => {
    const alignmentTests: Array<[unknown, unknown, string]> = [
      ['center', undefined, 'Dropdown Dropdown--alignmentXCenter'],
      ['center', 'center', 'Dropdown Dropdown--alignmentXCenter Dropdown--alignmentYCenter'],
      [
        { tablet: 'center', desktop: 'right' },
        undefined,
        'Dropdown Dropdown--tablet--alignmentXCenter Dropdown--desktop--alignmentXRight',
      ],
      [
        { mobile: 'left', tablet: 'center', desktop: 'right' },
        undefined,
        'Dropdown Dropdown--alignmentXLeft Dropdown--tablet--alignmentXCenter Dropdown--desktop--alignmentXRight',
      ],
      [
        { mobile: 'left', tablet: 'center', desktop: 'right' },
        { mobile: 'top', tablet: 'center', desktop: 'bottom' },
        'Dropdown Dropdown--alignmentXLeft Dropdown--tablet--alignmentXCenter Dropdown--desktop--alignmentXRight Dropdown--alignmentYTop Dropdown--tablet--alignmentYCenter Dropdown--desktop--alignmentYBottom',
      ],
    ];

    it.each(alignmentTests)(
      'should render alignmentX=%o and alignmentY=%o',
      (alignmentX, alignmentY, expectedClass) => {
        render(
          <Dropdown
            alignmentX={alignmentX as DropdownAlignmentXType}
            alignmentY={alignmentY as DropdownAlignmentYType}
            data-testid="dropdown"
            id="dropdown"
            isOpen={false}
            onToggle={() => {}}
          />,
        );

        // If your component *always* applies the 'Dropdown' class, include it in the expectation:
        expect(screen.getByTestId('dropdown')).toHaveClass(expectedClass);
      },
    );
  });
});
