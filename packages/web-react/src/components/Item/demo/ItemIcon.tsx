import React from 'react';
import Item from '../Item';

const ItemIcon = () => {
  return (
    <>
      <Item label="Item label" iconName="search" />
      <Item label="Item label" iconName="search" isSelected />
    </>
  );
};

export default ItemIcon;
