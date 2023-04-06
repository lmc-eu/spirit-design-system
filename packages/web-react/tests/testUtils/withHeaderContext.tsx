import React, { ElementType } from 'react';
import { HeaderContextType, HeaderProvider } from '../../src/components/Header/deprecated/HeaderContext';

export const withHeaderContext =
  (Component: ElementType, value = { headerClass: 'Header' } as HeaderContextType) =>
  (props: unknown) =>
    (
      <HeaderProvider value={value}>
        <Component {...(props as object)} />
      </HeaderProvider>
    );
