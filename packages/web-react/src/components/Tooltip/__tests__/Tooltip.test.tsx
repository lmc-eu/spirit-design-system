import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { Button } from '../../Button';
import { Tooltip, TooltipPopover, TooltipTrigger } from '..';

describe('Tooltip', () => {
  const id = 'tooltip-test';
  const triggerText = 'TooltipTrigger';
  const popoverText = 'TooltipPopover';

  stylePropsTest((props) => <Tooltip id={id} {...props} data-testid="tooltip-test" />, 'tooltip-test');

  restPropsTest((props) => <Tooltip id={id} {...props} />, 'div');

  it('should render tooltip', () => {
    const onToggle = () => null;
    const open = true;

    render(
      <Tooltip id={id} isOpen={open} onToggle={onToggle}>
        <TooltipTrigger>{triggerText}</TooltipTrigger>
        <TooltipPopover>{popoverText}</TooltipPopover>
      </Tooltip>,
    );

    expect(screen.getByRole('button')).toHaveTextContent(triggerText);
    expect(screen.getByRole('tooltip')).toHaveTextContent(popoverText);
  });

  it('should be opened', () => {
    const onToggle = jest.fn();

    render(
      <Tooltip id={id} isOpen onToggle={onToggle}>
        <TooltipTrigger elementType={Button}>trigger</TooltipTrigger>
        <TooltipPopover>{popoverText}</TooltipPopover>
      </Tooltip>,
    );

    expect(screen.getByRole('tooltip')).not.toHaveClass('is-hidden');
  });

  it('should call toggle function', () => {
    const onToggle = jest.fn();

    render(
      <Tooltip id={id} isOpen={false} onToggle={onToggle}>
        <TooltipTrigger elementType={Button}>trigger</TooltipTrigger>
        <TooltipPopover>Hello World</TooltipPopover>
      </Tooltip>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onToggle).toHaveBeenCalled();
  });
});
