import React from 'react';
import { MEDIA_IMAGE } from '../../Card/demo/constants';
import GalleryItem from '../GalleryItem';
import { Gallery } from '../index';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
];

const GalleryBnB = () => (
  <Gallery variant="bnb" spacing="space-800">
    {items.map((item, index) => (
      <GalleryItem key={`item-${index + 1}`} {...(index === 0 ? { isFirst: true } : undefined)}>
        <img src={item.img} alt={item.title} />
      </GalleryItem>
    ))}
  </Gallery>
);

export default GalleryBnB;
