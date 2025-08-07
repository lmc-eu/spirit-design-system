import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritGalleryItemProps } from '../../types/gallery';
import { GridItem } from '../Grid';
import { useGalleryContext } from './GalleryContext';
import { useGalleryStyleProps } from './useGalleryStyleProps';

const GalleryItem = (props: SpiritGalleryItemProps) => {
  const { children, isFirst = false, ...restProps } = props;
  const { variant } = useGalleryContext();
  const { classProps } = useGalleryStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const layoutProps =
    variant === 'bnb' && isFirst
      ? {
          columnStart: { tablet: 1 },
          columnEnd: { tablet: 3 },
          rowStart: { tablet: 1 },
          rowEnd: { tablet: 3 },
        }
      : {};

  return (
    <GridItem
      {...otherProps}
      {...styleProps}
      {...layoutProps}
      UNSAFE_className={classNames(classProps.item, styleProps.className)}
    >
      {children}
    </GridItem>
  );
};

GalleryItem.spiritComponent = 'GalleryItem';

export default GalleryItem;
