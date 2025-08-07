import React from 'react';
import GalleryItem from '../GalleryItem';
import { Gallery } from '../index';

export const items = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
];

const GalleryDefault = () => (
  <Gallery variant="grid" spacing="space-800">
    {items.map((item) => (
      <GalleryItem key={item.title}>
        <img src={item.img} alt={item.title} />
      </GalleryItem>
    ))}
  </Gallery>
);

export default GalleryDefault;
