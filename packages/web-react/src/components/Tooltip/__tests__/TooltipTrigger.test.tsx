import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { Button } from '../../Button';
import { TooltipTrigger } from '..';

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
