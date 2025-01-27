'use client';

import classNames from 'classnames';
import React, { ReactElement } from 'react';
import { useSkeletonStyleProps } from './useSkeletonStyleProps';

const SkeletonItem = (): ReactElement => {
  const { classProps } = useSkeletonStyleProps();

  return <div className={classNames(classProps.item)} aria-hidden="true" />;
};

export default SkeletonItem;
