'use client';

import { render } from '@testing-library/react';
import React, { ElementType } from 'react';
import { HeaderDialogProvider, HeaderDialogContextProps } from '../../src';

export const renderWithHeaderContext = (
  Component: ElementType,
  value = { headerClass: 'Header' } as unknown as HeaderDialogContextProps,
) =>
  render(
    <HeaderDialogProvider value={value}>
      <Component />
    </HeaderDialogProvider>,
  );
