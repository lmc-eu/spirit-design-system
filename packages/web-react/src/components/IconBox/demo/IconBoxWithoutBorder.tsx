import React from 'react';
import IconBox from '../IconBox';

const IconBoxWithoutBorder = () => (
  <>
    <IconBox iconName="search" color="secondary" hasBorder={false} borderRadius="rounded" />
    <IconBox iconName="search" color="secondary" hasBorder={false} borderRadius="circle" />
    <IconBox iconName="search" color="secondary" hasBorder={false} borderRadius="square" />
  </>
);

export default IconBoxWithoutBorder;
