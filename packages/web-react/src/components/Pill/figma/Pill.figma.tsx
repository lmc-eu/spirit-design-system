import figma from '@figma/code-connect';
import React, { type ReactNode } from 'react';
import Pill from '../Pill';

figma.connect(Pill, '<FIGMA_FILE_ID>?node-id=4353%3A4437', {
  props: {
    children: figma.textContent('Placeholder'),
    color: figma.enum('Color', {
      Neutral: 'neutral',
      Informative: 'informative',
      Success: 'success',
      Warning: 'warning',
      Danger: 'danger',
    }),
  },
  example: ({ children, ...props }: { children: ReactNode }) => <Pill {...props}>{children}</Pill>,
});
