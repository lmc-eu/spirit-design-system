import figma from '@figma/code-connect';
import React, { type ReactNode } from 'react';
import type { CardProps } from '../../../types';
import { Button } from '../../Button';
import Card from '../Card';
import CardBody from '../CardBody';
import CardEyebrow from '../CardEyebrow';
import CardFooter from '../CardFooter';
import CardMedia from '../CardMedia';
import CardTitle from '../CardTitle';

const commonProps = {
  direction: figma.enum('Photo placement', {
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
  isCardMediaExpanded: figma.boolean('Photo boxed'),
  paragraph: figma.boolean('Paragraph text', {
    true: <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum risus id tortor.</p>,
    false: undefined,
  }),
};

const example = ({
  eyebrow = undefined,
  footer = undefined,
  isCardMediaExpanded,
  paragraph = undefined,
  ...props
}: CardProps & {
  eyebrow?: ReactNode;
  footer?: ReactNode;
  isCardMediaExpanded?: boolean;
  paragraph?: ReactNode;
}) => (
  <Card {...props}>
    <CardMedia isExpanded={isCardMediaExpanded}>Replace with image</CardMedia>
    <CardBody>
      {eyebrow}
      <CardTitle isHeading>The heading of your card</CardTitle>
      {paragraph}
    </CardBody>
    {footer}
  </Card>
);

figma.connect(Card, '<FIGMA_FILE_ID>?node-id=37201%3A1917', {
  props: commonProps,
  example,
});
