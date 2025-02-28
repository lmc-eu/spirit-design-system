import { render, waitFor } from '@testing-library/react';
import React, { ComponentType } from 'react';
import { TextAlignments, TextAlignmentType } from '../../src';
import getElement from '../testUtils/getElement';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const textAlignmentPropsTest = (Component: ComponentType<any>, testId?: string) => {
  it.each([Object.values(TextAlignments)])('should render text color %s', async (textAlignment) => {
    const dom = render(<Component textAlignment={textAlignment as TextAlignmentType} />);

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element).toHaveClass(`text-${textAlignment}`);
    });
  });
};
