import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import { Grid } from '../../Grid';
import { Icon } from '../../Icon';
import { PartnerLogo } from '../../PartnerLogo';
import Card from '../Card';
import CardArtwork from '../CardArtwork';
import CardBody from '../CardBody';
import CardEyebrow from '../CardEyebrow';
import CardFooter from '../CardFooter';
import CardLink from '../CardLink';
import CardLogo from '../CardLogo';
import CardMedia from '../CardMedia';
import CardTitle from '../CardTitle';
import { LOGO, MEDIA_IMAGE } from './constants';

const CardReversedHorizontalLayout = () => (
  <Grid cols={{ mobile: 1, tablet: 2 }}>
    <Card direction="horizontal-reversed" isBoxed>
      <CardMedia size="medium" isExpanded>
        {MEDIA_IMAGE}
      </CardMedia>
      <CardBody>
        <CardEyebrow>Horizontal reversed card layout</CardEyebrow>
        <CardTitle isHeading>
          <CardLink href="#">Media and text</CardLink>
        </CardTitle>
        {/* User content */}
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum risus id tortor. Integer lacinia.
          Sed vel lectus.
        </p>
        {/* End user content */}
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

    <Card direction="horizontal-reversed" isBoxed>
      <CardMedia size="medium" isExpanded>
        {MEDIA_IMAGE}
      </CardMedia>
      <CardLogo>
        <PartnerLogo size="small" hasSafeArea>
          {LOGO}
        </PartnerLogo>
      </CardLogo>
      <CardBody>
        <CardEyebrow>Horizontal reversed card layout</CardEyebrow>
        <CardTitle isHeading>
          <CardLink href="#">Media, logo and text</CardLink>
        </CardTitle>
        {/* User content */}
        <p>Lorem ipsum dolor sit amet.</p>
        {/* End user content */}
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

    <Card direction="horizontal-reversed" isBoxed>
      <CardArtwork>
        <Icon name="file" />
      </CardArtwork>
      <CardBody>
        <CardEyebrow>Horizontal reversed card layout</CardEyebrow>
        <CardTitle isHeading>Artwork and text</CardTitle>
        {/* User content */}
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        {/* End user content */}
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

    <Card direction="horizontal-reversed" isBoxed>
      <CardArtwork>
        <Icon name="file" />
      </CardArtwork>
      <CardBody>
        <CardEyebrow>Horizontal reversed card layout</CardEyebrow>
        <CardTitle isHeading>Artwork and text</CardTitle>
        {/* User content */}
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        {/* End user content */}
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
  </Grid>
);

export default CardReversedHorizontalLayout;
