import React from 'react';
import GalleryItem from '../GalleryItem';
import { Gallery } from '../index';
import { items } from './GalleryDefault';

const GalleryMasonry = () => (
  <Gallery variant="masonry" spacing="space-800">
    {items.map((item, index) => (
      <GalleryItem key={`item-${index + 1}`} {...(index === 0 ? { isFirst: true } : undefined)}>
        <img src={item.img} alt={item.title} />
      </GalleryItem>
    ))}
  </Gallery>
);

export default GalleryMasonry;
