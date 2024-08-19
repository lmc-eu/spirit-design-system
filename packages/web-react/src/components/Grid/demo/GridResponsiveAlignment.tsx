import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Grid from '../Grid';

const GridResponsiveAlignment = () => (
  <Grid cols={2}>
    <Grid
      cols={1}
      alignmentX={{ tablet: 'center', desktop: 'right' }}
      alignmentY={{ tablet: 'center', desktop: 'bottom' }}
      UNSAFE_className="bg-secondary"
    >
      <DocsBox size="small">
        Horizontal Alignment
        <br />…
      </DocsBox>
    </Grid>
    <Grid
      cols={1}
      alignmentX={{ mobile: 'left', tablet: 'center', desktop: 'right' }}
      alignmentY={{ mobile: 'top', tablet: 'center', desktop: 'bottom' }}
      UNSAFE_className="bg-secondary"
    >
      <DocsBox size="small">Vertical Alignment</DocsBox>
    </Grid>
  </Grid>
);

export default GridResponsiveAlignment;
