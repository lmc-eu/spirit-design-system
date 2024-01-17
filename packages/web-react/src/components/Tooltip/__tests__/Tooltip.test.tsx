import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { Button } from '../../Button';
import { Tooltip, TooltipModern, TooltipTrigger, TooltipPopover } from '..';

describe('Tooltip', () => {
  classNamePrefixProviderTest(Tooltip, 'Tooltip');

  stylePropsTest((props: Record<string, unknown>) => {
    const onClose = () => null;

    return <Tooltip open={false} onClose={onClose} {...props} data-testid="test-tooltip" />;
  }, 'test-tooltip');

  restPropsTest(Tooltip, '.Tooltip');

  it('should render text children', () => {
    const onClose = () => null;
    const dom = render(
      <Tooltip open={false} onClose={onClose}>
        Hello World
      </Tooltip>,
    );
    const element = dom.container.querySelector('.Tooltip') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});

describe('TooltipModern', () => {
  stylePropsTest((props) => <TooltipModern {...props} data-testid="TooltipModern-test" />, 'TooltipModern-test');

  restPropsTest((props) => <TooltipModern {...props} />, 'div');

  const id = 'TooltipModernTest';
  const triggerText = 'TooltipTrigger';
  const popoverText = 'TooltipPopover';

  it('should render tooltip', () => {
    const onToggle = () => null;
    const open = true;

    const dom = render(
      <TooltipModern id={id} isOpen={open} onToggle={onToggle}>
        <TooltipTrigger>{triggerText}</TooltipTrigger>
        <TooltipPopover>{popoverText}</TooltipPopover>
      </TooltipModern>,
    );

    const triggerElement = dom.container.querySelector(`#${id}`) as HTMLElement;
    const popoverElement = dom.container.querySelector('[data-spirit-element="tooltip"]') as HTMLElement;

    expect(triggerElement.textContent).toBe(triggerText);
    expect(popoverElement.textContent).toBe(popoverText);
  });

  it('should be opened', () => {
    const onToggle = jest.fn();

    const dom = render(
      <TooltipModern id={id} isOpen onToggle={onToggle}>
        <TooltipTrigger elementType={Button}>trigger</TooltipTrigger>
        <TooltipPopover>{popoverText}</TooltipPopover>
      </TooltipModern>,
    );
    const element = dom.container.querySelector('.Tooltip') as HTMLElement;

    expect(element).not.toHaveClass('is-hidden');
  });

  it('should call toggle function', () => {
    const onToggle = jest.fn();

    const dom = render(
      <TooltipModern id={id} isOpen={false} onToggle={onToggle}>
        <TooltipTrigger elementType={Button}>trigger</TooltipTrigger>
        <TooltipPopover>Hello World</TooltipPopover>
      </TooltipModern>,
    );
    const trigger = dom.container.querySelector(`button#${id}`) as HTMLElement;

    fireEvent.click(trigger);

    expect(onToggle).toHaveBeenCalled();
  });
});

describe('TooltipTrigger', () => {
  stylePropsTest((props) => <TooltipTrigger {...props} data-testid="TooltipTrigger-test" />, 'TooltipTrigger-test');

  restPropsTest((props) => <TooltipTrigger elementType={Button} {...props} />, 'button');

  it('should render tooltip trigger', () => {
    const id = 'TooltipTriggerTest';
    const triggerText = 'TooltipTrigger';

    const dom = render(<TooltipTrigger data-spirit-testid={id}>{triggerText}</TooltipTrigger>);
    const element = dom.container.querySelector(`[data-spirit-testid="${id}"]`) as HTMLElement;

    expect(element.textContent).toBe(triggerText);
  });
});

describe('TooltipPopover', () => {
  classNamePrefixProviderTest(TooltipPopover, 'Tooltip');

  stylePropsTest((props) => <TooltipPopover {...props} data-testid="TooltipPopover-test" />, 'TooltipPopover-test');

  restPropsTest((props) => <TooltipPopover {...props} />, 'div');

  it('should render tooltip popover', () => {
    const popoverText = 'TooltipPopover';

    const dom = render(<TooltipPopover>{popoverText}</TooltipPopover>);
    const element = dom.container.querySelector('.Tooltip') as HTMLElement;

    expect(element.textContent).toBe(popoverText);
  });
});
