import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import React, { ComponentType } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toBeInDocumentProviderTest = (Component: ComponentType<any>, selector?: string, testId?: string) => {
  it(`renders ${selector || testId} in document`, async () => {
    if (!selector && !testId) {
      throw new Error('Either selector or testId must be provided');
    }

    const dom = render(<Component />);

    await waitFor(() => {
      const element = testId ? screen.getByTestId(testId) : (dom.container.querySelector(selector!) as HTMLElement);
      expect(element).toBeInTheDocument();
    });
  });
};
