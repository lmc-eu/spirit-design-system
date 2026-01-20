import React from 'react';
import Hidden from '../Hidden';

const HiddenOn = () => (
  <>
    <Hidden on="mobile">Hidden on mobile only</Hidden>
    <Hidden on="tablet">Hidden on tablet only</Hidden>
    <Hidden on={['mobile', 'tablet']}>Hidden on mobile and tablet</Hidden>
  </>
);

export default HiddenOn;
