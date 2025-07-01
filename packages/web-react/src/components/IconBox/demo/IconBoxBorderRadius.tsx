import React from 'react';
import IconBox from '../IconBox';

const IconBoxBorderRadius = () => (
  <>
    <IconBox iconName="search" />
    <IconBox iconName="search" borderRadius="circle" />
    <IconBox iconName="search" borderRadius="square" />
  </>
);

export default IconBoxBorderRadius;
