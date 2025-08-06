'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { ChildrenProps } from '../../types';
import { Box } from '../Box';
import { GridItem } from '../Grid';
import { useGalleryStyleProps } from './useGalleryStyleProps';

const GalleryItem = (props: ChildrenProps) => {
  const { children, ...restProps } = props;
  const { classProps } = useGalleryStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <GridItem {...otherProps} UNSAFE_className={classNames(classProps.item, styleProps.className)} {...styleProps}>
      {children}
    </GridItem>
  );
};

GalleryItem.spiritComponent = 'GalleryItem';

export default GalleryItem;
