import React from 'react';
import IconBox from '../IconBox';

const IconBoxWithoutBorder = () => (
  <>
    <IconBox iconName="search" hasBorder={false} shape="rounded" />
    <IconBox iconName="search" hasBorder={false} shape="circle" />
    <IconBox iconName="search" hasBorder={false} shape="square" />
  </>
);

export default IconBoxWithoutBorder;
