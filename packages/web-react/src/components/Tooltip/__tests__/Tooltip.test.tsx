import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { Button } from '../../Button';
import { Tooltip, TooltipTrigger, TooltipPopover } from '..';

describe('Tooltip', () => {
  const id = 'TooltipTest';
  const triggerText = 'TooltipTrigger';
  const popoverText = 'TooltipPopover';

  stylePropsTest((props) => <Tooltip id={id} {...props} data-testid="Tooltip-test" />, 'Tooltip-test');

  restPropsTest((props) => <Tooltip id={id} {...props} />, 'div');

  it('should render tooltip', () => {
    const onToggle = () => null;
    const open = true;

    const dom = render(
      <Tooltip id={id} isOpen={open} onToggle={onToggle}>
        <TooltipTrigger>{triggerText}</TooltipTrigger>
        <TooltipPopover>{popoverText}</TooltipPopover>
      </Tooltip>,
    );

    const triggerElement = dom.container.querySelector(`#${id}`) as HTMLElement;
    const popoverElement = dom.container.querySelector('[data-spirit-element="tooltip"]') as HTMLElement;

    expect(triggerElement.textContent).toBe(triggerText);
    expect(popoverElement.textContent).toBe(popoverText);
  });

  it('should be opened', () => {
    const onToggle = jest.fn();

    const dom = render(
      <Tooltip id={id} isOpen onToggle={onToggle}>
        <TooltipTrigger elementType={Button}>trigger</TooltipTrigger>
        <TooltipPopover>{popoverText}</TooltipPopover>
      </Tooltip>,
    );
    const element = dom.container.querySelector('.Tooltip') as HTMLElement;

    expect(element).not.toHaveClass('is-hidden');
  });

  it('should call toggle function', () => {
    const onToggle = jest.fn();

    const dom = render(
      <Tooltip id={id} isOpen={false} onToggle={onToggle}>
        <TooltipTrigger elementType={Button}>trigger</TooltipTrigger>
        <TooltipPopover>Hello World</TooltipPopover>
      </Tooltip>,
    );
    const trigger = dom.container.querySelector(`button#${id}`) as HTMLElement;

    fireEvent.click(trigger);

    expect(onToggle).toHaveBeenCalled();
  });
});
