import figma from '@figma/code-connect';
import React from 'react';
import Slider from '../Slider';

figma.connect(Slider, '<FIGMA_FILE_ID>?node-id=21795%3A15814', {
  props: {
    isDisabled: figma.boolean('Disabled'),
    value: figma.enum('Value', {
      '0%': 0,
      '50%': 50,
      '100%': 100,
    }),
  },
  example: (props) => (
    <Slider {...props} id="slider-default" isLabelHidden label="Fill accessible label" onChange={() => {}} />
  ),
});
