import figma from '@figma/code-connect';
import React, { type ReactNode } from 'react';
import type { SpiritAvatarProps } from '../../../types';
import Avatar from '../Avatar';

const commonProps = {
  isSquare: figma.enum('Type', {
    Square: true,
    Circle: false,
  }),
  size: figma.enum('Size', {
    XSmall: 'xsmall',
    Small: 'small',
    Large: 'large',
    XLarge: 'xlarge',
  }),
};

const placeholderProps = {
  ...commonProps,
  children: figma.children('Icon*'),
};

const initialsProps = {
  ...commonProps,
  children: figma.textContent('Text'),
};

const AVATAR_NODE_URL = '<FIGMA_FILE_ID>?node-id=18805%3A227';

figma.connect(Avatar, AVATAR_NODE_URL, {
  props: placeholderProps,
  variant: { Style: 'Placeholder' },
  example: ({ children, ...props }: { children: ReactNode }) => (
    <Avatar {...props} aria-label="Fill in the full name or a placeholder">
      {children}
    </Avatar>
  ),
});

figma.connect(Avatar, AVATAR_NODE_URL, {
  props: commonProps,
  variant: { Style: 'Photo' },
  example: (props: SpiritAvatarProps) => (
    <Avatar {...props} aria-label="Fill in the full name or a placeholder">
      <img src="https://via.placeholder.com/150" alt="Fill in the full name or a placeholder" aria-hidden="true" />
    </Avatar>
  ),
});

figma.connect(Avatar, AVATAR_NODE_URL, {
  props: initialsProps,
  variant: { Style: 'Initials' },
  example: ({ children, ...props }: { children: ReactNode }) => (
    <Avatar {...props} aria-label="Fill in the full name or a placeholder">
      <span aria-hidden="true">{children}</span>
    </Avatar>
  ),
});
