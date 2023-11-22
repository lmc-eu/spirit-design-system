import React from 'react';
import Item from '../Item';

const ItemHelperText = () => {
  return (
    <>
      <Item label="Item label" helperText="Helper text" />
      <Item label="Item label" helperText="Helper text" isSelected />
      <Item label="Item label" helperText="Helper text" isDisabled />
      <Item label="Item label" helperText="Helper text" isSelected isDisabled />
    </>
  );
};

export default ItemHelperText;
