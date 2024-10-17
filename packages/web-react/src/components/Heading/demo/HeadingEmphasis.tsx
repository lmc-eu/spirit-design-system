import React from 'react';
import Heading from '../Heading';

const HeadingEmphasis = () => (
  <>
    <Heading elementType="h2" emphasis="regular">
      Heading regular
    </Heading>
    <Heading elementType="h2" emphasis="semibold">
      Heading semibold
    </Heading>
    <Heading elementType="h2" emphasis="bold">
      Heading bold
    </Heading>
    <Heading elementType="h2" emphasis="italic">
      Heading italic
    </Heading>
  </>
);

export default HeadingEmphasis;
