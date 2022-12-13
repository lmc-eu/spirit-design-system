import { render, waitFor } from '@testing-library/react';
import React, { ComponentType } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const itemPropsTest = (Component: ComponentType<any>, selector: string) => {
  it('should have item classname', async () => {
    const dom = render(<Component isItem />);

    await waitFor(() => {
      const element = dom.container.querySelector(selector) as HTMLElement;
      expect(element.getAttribute('class')).toContain('--item');
    });
  });
};
