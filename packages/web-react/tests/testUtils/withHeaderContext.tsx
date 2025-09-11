import React, { type ElementType } from 'react';
import { type HeaderDialogContextProps, HeaderDialogProvider } from '../../src';

export const withHeaderContext =
  (Component: ElementType, value = { headerClass: 'Header' } as unknown as HeaderDialogContextProps) =>
  (props: unknown) => (
    <HeaderDialogProvider value={value}>
      <Component {...(props as object)} />
    </HeaderDialogProvider>
  );
