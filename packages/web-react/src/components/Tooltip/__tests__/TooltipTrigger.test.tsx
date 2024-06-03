import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { Button } from '../../Button';
import { TooltipTrigger } from '..';

describe('TooltipTrigger', () => {
  stylePropsTest((props) => <TooltipTrigger {...props} data-testid="TooltipTrigger-test" />, 'TooltipTrigger-test');

  restPropsTest((props) => <TooltipTrigger elementType={Button} {...props} />, 'button');

  it('should render tooltip trigger', () => {
    const triggerText = 'TooltipTrigger';

    render(<TooltipTrigger>{triggerText}</TooltipTrigger>);

    expect(screen.getByRole('button')).toHaveTextContent(triggerText);
  });
});
