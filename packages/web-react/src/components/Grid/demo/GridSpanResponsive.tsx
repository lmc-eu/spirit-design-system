import React from 'react';
import Grid from '../Grid';
import GridSpan from '../GridSpan';

const GridSpanResponsive = () => (
  <>
    <Grid UNSAFE_className="mb-1000">
      <GridSpan over={12} tablet={10} desktop={8}>
        <div className="docs-Box docs-Box--small">12 on mobile, 10 on tablet, 8 on desktop</div>
      </GridSpan>
    </Grid>

    <Grid UNSAFE_className="mb-1000">
      <GridSpan over={10} tablet={8} desktop={6}>
        <div className="docs-Box docs-Box--small">10 on mobile, 8 on tablet, 6 on desktop</div>
      </GridSpan>
    </Grid>

    <Grid>
      <GridSpan over={8} tablet={12} desktop={4}>
        <div className="docs-Box docs-Box--small">8 on mobile, 12 on tablet, 4 on desktop</div>
      </GridSpan>
    </Grid>
  </>
);

export default GridSpanResponsive;
