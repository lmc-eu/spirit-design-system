import React from 'react';
import { Grid } from '../../Grid';
import Card from '../Card';
import CardBody from '../CardBody';
import CardMedia from '../CardMedia';
import CardTitle from '../CardTitle';
import { MEDIA_IMAGE } from './constants';

const CardTitleOptions = () => (
  <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }}>
    <Card>
      <CardMedia>
        <img src={MEDIA_IMAGE} alt="" />
      </CardMedia>
      <CardBody>
        <CardTitle isHeading={false}>
          <a href="#" className="link-primary">
            Body-style primary link
          </a>
        </CardTitle>
      </CardBody>
    </Card>

    <Card>
      <CardMedia>
        <img src={MEDIA_IMAGE} alt="" />
      </CardMedia>
      <CardBody>
        <CardTitle isHeading={false}>
          <a href="#" className="link-secondary">
            Body-style secondary link
          </a>
        </CardTitle>
      </CardBody>
    </Card>

    <Card>
      <CardMedia isExpanded>
        <img src={MEDIA_IMAGE} alt="" />
      </CardMedia>
      <CardBody>
        <CardTitle>
          <a href="#">Heading-style primary link</a>
        </CardTitle>
      </CardBody>
    </Card>
  </Grid>
);

export default CardTitleOptions;
