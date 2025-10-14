'use client';

import { render } from '@testing-library/react';
import React, { type ElementType } from 'react';
import { type HeaderDialogContextProps, HeaderDialogProvider } from '../../src';

export const renderWithHeaderContext = (
  Component: ElementType,
  value = { headerClass: 'Header' } as unknown as HeaderDialogContextProps,
) =>
  render(
    <HeaderDialogProvider value={value}>
      <Component />
    </HeaderDialogProvider>,
  );
