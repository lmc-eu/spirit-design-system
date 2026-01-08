import figma from '@figma/code-connect';
import React from 'react';
import { Button } from '../../Button';
import { Link } from '../../Link';
import ActionGroup from '../ActionGroup';

const ACTION_GROUP_NODE_URL = '<FIGMA_FILE_ID>?node-id=35661%3A27096';

figma.connect(ActionGroup, ACTION_GROUP_NODE_URL, {
  props: {},
  variant: {
    Type: 'Buttons',
  },
  example: (props) => (
    <ActionGroup {...props}>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ActionGroup>
  ),
});

figma.connect(ActionGroup, ACTION_GROUP_NODE_URL, {
  props: {},
  variant: {
    Type: 'Links',
  },
  example: (props) => (
    <ActionGroup {...props}>
      <Link href="#link">Link</Link>
      <Link href="#link">Link</Link>
      <Link href="#link">Link</Link>
    </ActionGroup>
  ),
});
