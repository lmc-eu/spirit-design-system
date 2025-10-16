import figma from '@figma/code-connect';
import React from 'react';
import Icon from '../Icon/Icon';
import Button from './Button';

const BUTTON_NODE_URL = '<FIGMA_FILE_ID>?node-id=776%3A20';

const commonProps = {
  color: figma.enum('Color', {
    Primary: 'primary',
    Secondary: 'secondary',
    Tertiary: 'tertiary',
    Success: 'success',
    Warning: 'warning',
    Danger: 'danger',
    Informative: 'informative',
    Plain: 'plain',
  }),
  isDisabled: figma.boolean('Disabled'),
  isLoading: figma.boolean('Loading'),
  size: figma.enum('Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
  }),
};

figma.connect(Button, BUTTON_NODE_URL, {
  props: {
    ...commonProps,
    children: figma.textContent('Action'),
  },
  variant: { Content: 'Text' },
  example: ({ children, ...props }) => <Button {...props}>{children}</Button>,
});

figma.connect(Button, BUTTON_NODE_URL, {
  props: {
    ...commonProps,
    children: figma.textContent('Action'),
  },
  variant: { Content: 'Text-and-icon' },
  example: ({ children, ...props }) => (
    <Button {...props}>
      <Icon name="placeholder" marginRight="space-500" />
      {children}
    </Button>
  ),
});

figma.connect(Button, BUTTON_NODE_URL, {
  props: {
    ...commonProps,
    children: figma.children('Icon*'),
  },
  variant: { Content: 'Icon' },
  example: ({ children, ...props }) => <Button {...props}>{children}</Button>,
});
