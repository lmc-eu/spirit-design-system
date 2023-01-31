import React, { ComponentType } from 'react';
import { render, waitFor } from '@testing-library/react';
import { DictionarySizeExtendedType, DictionarySizeType } from '../../src';
import getElement from '../testUtils/getElement';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sizePropsTest = (Component: ComponentType<any>, testId?: string) => {
  it.each([['small'], ['medium'], ['large']])('should render size %s', async (size) => {
    const dom = render(<Component size={size as DictionarySizeType} />);

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element.getAttribute('class')).toContain(size);
    });
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sizeExtendedPropsTest = (Component: ComponentType<any>, testId?: string) => {
  it.each([['xsmall'], ['xlarge']])('should render extended size %s', async (size) => {
    const dom = render(<Component size={size as DictionarySizeExtendedType} />);

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element.getAttribute('class')).toContain(size);
    });
  });
};
