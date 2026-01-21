import figma from '@figma/code-connect';
import React, { type ReactNode } from 'react';
import type { CardProps } from '../../../types';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import Card from '../Card';
import CardArtwork from '../CardArtwork';
import CardBody from '../CardBody';
import CardEyebrow from '../CardEyebrow';
import CardFooter from '../CardFooter';
import CardTitle from '../CardTitle';

const commonProps = {
  artwork: figma.boolean('Artwork', {
    true: (
      <CardArtwork>
        <Icon name="file" />
      </CardArtwork>
    ),
    false: undefined,
  }),
  direction: figma.enum('Artwork placement', {
    Left: 'horizontal',
    Right: 'horizontal-reversed',
  }),
  eyebrow: figma.boolean('Eyebrow', {
    true: <CardEyebrow>Eyebrow title</CardEyebrow>,
    false: undefined,
  }),
  footer: figma.boolean('Action', {
    true: (
      <CardFooter>
        <Button>Button</Button>
        <Button color="secondary">Button</Button>
      </CardFooter>
    ),
    false: undefined,
  }),
  isBoxed: figma.boolean('Boxed'),
  paragraph: figma.boolean('Paragraph text', {
    true: <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum risus id tortor.</p>,
    false: undefined,
  }),
};

const example = ({
  artwork = undefined,
  eyebrow = undefined,
  footer = undefined,
  paragraph = undefined,
  ...props
}: CardProps & {
  artwork?: ReactNode;
  eyebrow?: ReactNode;
  footer?: ReactNode;
  paragraph?: ReactNode;
}) => (
  <Card {...props}>
    {artwork}
    <CardBody>
      {eyebrow}
      <CardTitle isHeading>The heading of your card</CardTitle>
      {paragraph}
    </CardBody>
    {footer}
  </Card>
);

figma.connect(Card, '<FIGMA_FILE_ID>?node-id=37173%3A1977', {
  props: commonProps,
  example,
});
