import React from 'react';
import IconBox from '../IconBox';

const IconBoxWithoutBorder = () => (
  <>
    <IconBox iconName="search" color="secondary" hasBorder={false} shape="rounded" />
    <IconBox iconName="search" color="secondary" hasBorder={false} shape="circle" />
    <IconBox iconName="search" color="secondary" hasBorder={false} shape="square" />
  </>
);

export default IconBoxWithoutBorder;
