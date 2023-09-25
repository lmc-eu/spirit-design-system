import React from 'react';
import Grid from '../Grid';
import GridSpan from '../GridSpan';
import DocsBox from '../../../../docs/DocsBox';

const GridSpanResponsive = () => (
  <>
    <Grid>
      <GridSpan over={12} tablet={10} desktop={8}>
        <DocsBox size="small">12 on mobile, 10 on tablet, 8 on desktop</DocsBox>
      </GridSpan>
    </Grid>

    <Grid>
      <GridSpan over={10} tablet={8} desktop={6}>
        <DocsBox size="small">10 on mobile, 8 on tablet, 6 on desktop</DocsBox>
      </GridSpan>
    </Grid>

    <Grid>
      <GridSpan over={8} tablet={12} desktop={4}>
        <DocsBox size="small">8 on mobile, 12 on tablet, 4 on desktop</DocsBox>
      </GridSpan>
    </Grid>
  </>
);

export default GridSpanResponsive;
