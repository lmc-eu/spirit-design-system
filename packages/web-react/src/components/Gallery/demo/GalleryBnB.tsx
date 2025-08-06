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

const GalleryBnB = () => (
  <Gallery variant="bnb" cols={{ mobile: 1, tablet: 2, desktop: 4 }} spacing="space-800">
    {items.map((item, index) => (
      <GalleryItem
        key={`gallery-item-${index + 1}`}
        columnStart={index === 0 ? { tablet: 1 } : undefined}
        columnEnd={index === 0 ? { tablet: 3 } : undefined}
        rowStart={index === 0 ? { tablet: 1 } : undefined}
        rowEnd={index === 0 ? { tablet: 3 } : undefined}
      >
        {item.image}
      </GalleryItem>
    ))}
  </Gallery>
);

export default GalleryBnB;
