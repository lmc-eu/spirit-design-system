import figma from '@figma/code-connect';
import React, { type ReactNode } from 'react';
import Tag from '../Tag';

figma.connect(Tag, '<FIGMA_FILE_ID>?node-id=1980%3A4090', {
  props: {
    children: figma.textContent('Badge text'),
    color: figma.enum('Color', {
      Informative: 'informative',
      Success: 'success',
      Warning: 'warning',
      Danger: 'danger',
    }),
    isSubtle: figma.boolean('Subtle'),
    size: figma.enum('Size', {
      XLarge: 'xlarge',
      Large: 'large',
      Small: 'small',
      XSmall: 'xsmall',
    }),
  },
  example: ({ children, ...props }: { children: ReactNode }) => <Tag {...props}>{children}</Tag>,
});
