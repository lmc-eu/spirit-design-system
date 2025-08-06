import React from 'react';
import { MEDIA_IMAGE } from '../../Card/demo/constants';
import GalleryItem from '../GalleryItem';
import { Gallery } from '../index';

const items = [
  { title: 'Obrázek 1', image: MEDIA_IMAGE },
  { title: 'Obrázek 2', image: MEDIA_IMAGE },
  { title: 'Obrázek 3', image: MEDIA_IMAGE },
  { title: 'Obrázek 4', image: MEDIA_IMAGE },
  { title: 'Obrázek 5', image: MEDIA_IMAGE },
];

const GalleryDefault = () => (
  <Gallery variant="grid" cols={{ mobile: 1, tablet: 2, desktop: 3 }} spacing="space-800">
    {items.map((item) => (
      <GalleryItem key={item.title}>{item.image}</GalleryItem>
    ))}
  </Gallery>
);

export default GalleryDefault;
