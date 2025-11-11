import React from 'react';
import { SizesExtended } from '../../../constants';
import IconBox from '../IconBox';

const IconBoxResponsiveSize = () => (
  <IconBox
    iconName="search"
    size={{ mobile: SizesExtended.LARGE, tablet: SizesExtended.MEDIUM, desktop: SizesExtended.SMALL }}
  />
);

export default IconBoxResponsiveSize;
