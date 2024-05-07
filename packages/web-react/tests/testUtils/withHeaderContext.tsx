import React, { ElementType } from 'react';
import { HeaderDialogProvider, HeaderDialogContextProps } from '../../src';

export const withHeaderContext =
  (Component: ElementType, value = { headerClass: 'Header' } as unknown as HeaderDialogContextProps) =>
  (props: unknown) => (
    <HeaderDialogProvider value={value}>
      <Component {...(props as object)} />
    </HeaderDialogProvider>
  );
