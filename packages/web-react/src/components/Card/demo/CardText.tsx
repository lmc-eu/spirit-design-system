import React from 'react';
import { Grid } from '../../Grid';
import Card from '../Card';
import CardBody from '../CardBody';
import CardEyebrow from '../CardEyebrow';
import CardTitle from '../CardTitle';

const CardText = () => (
  <Grid cols={{ mobile: 2, desktop: 4 }}>
    <Card>
      <CardBody>
        <CardEyebrow>Eyebrow title</CardEyebrow>
        <CardTitle isHeading>Text card heading</CardTitle>
        {/* User content */}
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum risus id tortor. Integer lacinia.
          Sed vel lectus.
        </p>
        {/* End user content */}
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardEyebrow>Eyebrow title</CardEyebrow>
        <CardTitle isHeading>Text card heading</CardTitle>
        {/* User content */}
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum risus id tortor. Integer lacinia.
          Sed vel lectus.
        </p>
        {/* End user content */}
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardEyebrow>Eyebrow title</CardEyebrow>
        <CardTitle isHeading>Text card heading</CardTitle>
        {/* User content */}
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum risus id tortor. Integer lacinia.
          Sed vel lectus.
        </p>
        {/* End user content */}
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardEyebrow>Eyebrow title</CardEyebrow>
        <CardTitle isHeading>Text card heading</CardTitle>
        {/* User content */}
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum risus id tortor. Integer lacinia.
          Sed vel lectus.
        </p>
        {/* End user content */}
      </CardBody>
    </Card>
  </Grid>
);

export default CardText;
