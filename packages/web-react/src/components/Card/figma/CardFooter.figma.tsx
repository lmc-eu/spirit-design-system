import figma from '@figma/code-connect';
import React from 'react';
import { Button } from '../../Button';
import { Link } from '../../Link';
import CardFooter from '../CardFooter';

const CARD_FOOTER_NODE_URL = '<FIGMA_FILE_ID>?node-id=37173%3A2291';

figma.connect(CardFooter, CARD_FOOTER_NODE_URL, {
  props: {},
  variant: {
    Type: 'Links',
  },
  example: (props) => (
    <CardFooter {...props}>
      <Link href="#link">Link primary</Link>
      <Link href="#link" color="secondary">
        Link secondary
      </Link>
    </CardFooter>
  ),
});

figma.connect(CardFooter, CARD_FOOTER_NODE_URL, {
  props: {},
  variant: {
    Type: 'Buttons',
  },
  example: (props) => (
    <CardFooter {...props}>
      <Button>Button</Button>
      <Button color="secondary">Button</Button>
    </CardFooter>
  ),
});
