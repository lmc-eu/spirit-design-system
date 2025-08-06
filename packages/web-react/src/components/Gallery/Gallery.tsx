'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritGalleryProps } from '../../types/gallery';
import { Grid } from '../Grid';
import { useGalleryStyleProps } from './useGalleryStyleProps';

const Gallery = (props: SpiritGalleryProps) => {
  const { variant, children, ...restProps } = props;
  const { classProps } = useGalleryStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  if (variant === 'bnb') {
    return <Grid {...otherProps}>{children}</Grid>;
  }

  return (
    <Grid {...otherProps} UNSAFE_className={classNames(classProps.root, styleProps.className)}>
      {children}
    </Grid>
  );
};

Gallery.spiritComponent = 'Gallery';

export default Gallery;
