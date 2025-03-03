import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Slider } from '@lmc-eu/spirit-web-react/components/Slider';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { UncontrolledSlider } from '@lmc-eu/spirit-web-react/components/UncontrolledSlider';

export const MyComponent = () => (
  <>
    <Slider id="slider" label="Slider" value="1" />
    <UncontrolledSlider id="uncontrolled-slider" label="Slider" value="2" />
  </>
);
