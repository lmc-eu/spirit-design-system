import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { Grid } from '../../Grid';
import ScrollView from '../ScrollView';

const ScrollViewHorizontalBreakout = () => (
  <div className="breakout-container">
    <ScrollView direction="horizontal">
      <Grid cols={4} marginBottom="space-700" UNSAFE_style={{ paddingInline: 'var(--container-padding-inline)' }}>
        {[1, 2, 3, 4].map((i) => (
          <DocsBox key={i} size="small" UNSAFE_style={{ width: '20rem', aspectRatio: '2/1' }}>
            1/4
          </DocsBox>
        ))}
      </Grid>
    </ScrollView>
  </div>
);

export default ScrollViewHorizontalBreakout;
