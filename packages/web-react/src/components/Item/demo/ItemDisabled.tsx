import React from 'react';
import Item from '../Item';

const ItemDisabled = () => (
  <>
    <Item label="Item label" isDisabled />
    <Item label="Item label" isDisabled isSelected />
  </>
);

export default ItemDisabled;
