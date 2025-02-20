import React from 'react';
import { TextColors } from '../../../constants';
import Heading from '../Heading';

const HeadingTextColor = () => (
  <>
    {Object.values(TextColors).map((textColor) => (
      <Heading elementType="h2" key={textColor} textColor={textColor}>
        Heading {textColor}
      </Heading>
    ))}
  </>
);

export default HeadingTextColor;
