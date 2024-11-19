import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardDirection } from '../../../types';
import { ButtonLink } from '../../ButtonLink';
import { Container } from '../../Container';
import { PartnerLogo } from '../../PartnerLogo';
import Card from '../Card';
import CardBody from '../CardBody';
import CardEyebrow from '../CardEyebrow';
import CardFooter from '../CardFooter';
import CardLogo from '../CardLogo';
import CardMedia from '../CardMedia';
import CardTitle from '../CardTitle';
import { LOGO, MEDIA_IMAGE } from '../demo/constants';
import ReadMe from '../README.md';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      description: 'Direction of the card.',
      options: [...Object.values(CardDirection)],
      table: {
        defaultValue: { summary: CardDirection.VERTICAL },
      },
    },
    elementType: {
      control: 'text',
    },
    isBoxed: {
      control: 'boolean',
      description: 'Border around the card.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    direction: CardDirection.VERTICAL,
    elementType: 'article',
    isBoxed: false,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  name: 'Card',
  render: (args) => (
    <Container>
      <Card {...args}>
        <CardMedia size="medium">
          <img src={MEDIA_IMAGE} alt="" />
        </CardMedia>
        <CardLogo>
          <PartnerLogo size="medium" hasSafeArea>
            {LOGO}
          </PartnerLogo>
        </CardLogo>
        <CardBody>
          <CardEyebrow>Card eyebrow</CardEyebrow>
          <CardTitle>Card Title</CardTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida,
            nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat. Morbi
            fringilla convallis sapien. Sed ac felis. Aliquam erat volutpat. Aliquam euismod. Aenean vel lectus. Nunc
            imperdiet justo nec dolor.
          </p>
        </CardBody>
        <CardFooter>
          <ButtonLink href="#" color="primary">
            Primary
          </ButtonLink>
          <ButtonLink href="#" color="secondary">
            Secondary
          </ButtonLink>
        </CardFooter>
      </Card>
    </Container>
  ),
};
