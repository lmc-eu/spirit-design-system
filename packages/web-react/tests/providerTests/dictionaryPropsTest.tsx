import React, { ComponentType } from 'react';
import { render, waitFor } from '@testing-library/react';
import { EmotionColor, SizeExtended, Size } from '../../src';
import getElement from '../testUtils/getElement';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sizePropsTest = (Component: ComponentType<any>, testId?: string) => {
  it.each([['small'], ['medium'], ['large']])('should render size %s', async (size) => {
    const dom = render(<Component size={size as Size<string>} />);

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element.getAttribute('class')).toContain(size);
    });
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sizeExtendedPropsTest = (Component: ComponentType<any>, testId?: string) => {
  it.each([['xsmall'], ['xlarge']])('should render extended size %s', async (size) => {
    const dom = render(<Component size={size as SizeExtended<string>} />);

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element.getAttribute('class')).toContain(size);
    });
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const emotionColorPropsTest = (Component: ComponentType<any>, prefix: string, testId?: string) => {
  it.each([['success'], ['informative'], ['warning'], ['danger']])('should render emotion color %s', async (color) => {
    const dom = render(<Component color={color as EmotionColor<string>} />);

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element).toHaveClass(`${prefix}${color}`);
    });
  });
};
