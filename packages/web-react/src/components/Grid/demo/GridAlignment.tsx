import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Grid from '../Grid';

const GridAlignment = () => (
  <>
    <Grid cols={2}>
      <Grid cols={1} UNSAFE_className="bg-cover">
        <DocsBox size="small">
          Stretch (default)
          <br />…
        </DocsBox>
      </Grid>
      <Grid cols={1} UNSAFE_className="bg-cover">
        <DocsBox size="small">Stretch (default)</DocsBox>
      </Grid>
    </Grid>

    <Grid cols={2}>
      <Grid cols={1} alignmentX="left" alignmentY="top" UNSAFE_className="bg-cover">
        <DocsBox size="small">
          Left
          <br />…
        </DocsBox>
      </Grid>
      <Grid cols={1} alignmentX="left" alignmentY="top" UNSAFE_className="bg-cover">
        <DocsBox size="small">Top</DocsBox>
      </Grid>
    </Grid>

    <Grid cols={2}>
      <Grid cols={1} alignmentX="center" alignmentY="center" UNSAFE_className="bg-cover">
        <DocsBox size="small">
          Center
          <br />…
        </DocsBox>
      </Grid>
      <Grid cols={1} alignmentX="center" alignmentY="center" UNSAFE_className="bg-cover">
        <DocsBox size="small">Center</DocsBox>
      </Grid>
    </Grid>

    <Grid cols={2}>
      <Grid cols={1} alignmentX="right" alignmentY="bottom" UNSAFE_className="bg-cover">
        <DocsBox size="small">
          Right
          <br />…
        </DocsBox>
      </Grid>
      <Grid cols={1} alignmentX="right" alignmentY="bottom" UNSAFE_className="bg-cover">
        <DocsBox size="small">Bottom</DocsBox>
      </Grid>
    </Grid>
  </>
);

export default GridAlignment;
