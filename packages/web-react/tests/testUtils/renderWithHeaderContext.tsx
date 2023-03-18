import { render } from '@testing-library/react';
import React, { ElementType } from 'react';
import { HeaderContextType, HeaderProvider } from '../../src/components/Header/deprecated/HeaderContext';

export const renderWithHeaderContext = (
  Component: ElementType,
  value = { headerClass: 'Header' } as HeaderContextType,
) =>
  render(
    <HeaderProvider value={value}>
      <Component />
    </HeaderProvider>,
  );
