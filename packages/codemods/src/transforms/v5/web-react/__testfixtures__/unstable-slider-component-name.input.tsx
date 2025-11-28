import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { UNSTABLE_Slider } from '@lmc-eu/spirit-web-react/components/UNSTABLE_Slider';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { UNSTABLE_UncontrolledSlider } from '@lmc-eu/spirit-web-react/components/UNSTABLE_UncontrolledSlider';

export const MyComponent = () => (
  <>
    <UNSTABLE_Slider id="slider" label="Slider" value="1" />
    <UNSTABLE_UncontrolledSlider id="uncontrolled-slider" label="Slider" value="2" />
  </>
);
