import React from 'react';
import { SizesExtended } from '../../../constants';
import Text from '../Text';

const TextSizes = () => {
  const sizes = Object.values(SizesExtended);

  return (
    <>
      {sizes.map((size) => (
        <Text key={size} size={size}>
          Text {size}
        </Text>
      ))}
    </>
  );
};

export default TextSizes;
