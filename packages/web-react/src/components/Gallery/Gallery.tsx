'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { GridColsBreakpoints, GridColumns } from '../../types';
import { SpiritGalleryProps } from '../../types/gallery';
import { Grid } from '../Grid';
import { GalleryProvider } from './GalleryContext';
import { useGalleryStyleProps } from './useGalleryStyleProps';

const Gallery = (props: SpiritGalleryProps) => {
  const { variant = 'grid', children, ...restProps } = props;
  const { classProps } = useGalleryStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const defaultCols = variant === 'bnb' ? { mobile: 1, tablet: 2, desktop: 4 } : { mobile: 1, tablet: 2, desktop: 3 };

  const cols = 'cols' in restProps ? restProps.cols : defaultCols;

  const contextValue = { variant };

  // const childrenWithIndex = [];
  // let galleryItemIndex = 0;
  //
  // Children.forEach(children, (child) => {
  //   if (isValidElement(child)) {
  //     const isGalleryItem = child.type === GalleryItem;
  //
  //     if (isGalleryItem) {
  //       const cloned = cloneElement(child, {
  //         isFirst: galleryItemIndex === 0,
  //       });
  //
  //       childrenWithIndex.push(cloned);
  //       galleryItemIndex += 1;
  //     } else {
  //       childrenWithIndex.push(child);
  //     }
  //   } else {
  //     childrenWithIndex.push(child);
  //   }
  // });

  return (
    <GalleryProvider value={contextValue}>
      <Grid
        {...otherProps}
        cols={cols as GridColsBreakpoints | GridColumns}
        UNSAFE_className={classNames(classProps.root, styleProps.className)}
      >
        {children}
      </Grid>
    </GalleryProvider>
  );
};

Gallery.spiritComponent = 'Gallery';

export default Gallery;
