import React from 'react';
import Hidden from '../Hidden';

const HiddenFrom = () => (
  <>
    <Hidden from="tablet">Hidden from tablet onwards (mobile only)</Hidden>
    <Hidden from="desktop">Hidden from desktop onwards (mobile and tablet)</Hidden>
  </>
);

export default HiddenFrom;
