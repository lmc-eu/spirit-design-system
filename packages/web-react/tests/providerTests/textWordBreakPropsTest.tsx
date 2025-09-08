import { render, waitFor } from '@testing-library/react';
import React, { ComponentType } from 'react';
import { TextWordBreaks, TextWordBreakType } from '../../src';
import getElement from '../testUtils/getElement';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const textWordBreakPropsTest = (Component: ComponentType<any>, testId?: string) => {
  it.each([Object.values(TextWordBreaks)])('should render text word breaks %s', async (textWordBreak) => {
    const dom = render(<Component textWordBreak={textWordBreak as TextWordBreakType} />);

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element).toHaveClass(`text-word-break-${textWordBreak}`);
    });
  });
};
