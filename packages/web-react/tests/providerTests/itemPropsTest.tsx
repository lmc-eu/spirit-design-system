import { render, screen, waitFor } from '@testing-library/react';
import React, { type ComponentType } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const itemPropsTest = (Component: ComponentType<any>) => {
  it('should have item classname', async () => {
    render(<Component isItem data-testid="test" />);

    await waitFor(() => {
      const element = screen.queryByTestId('test');
      expect(element?.parentElement?.className).toContain('--item');
    });
  });
};
