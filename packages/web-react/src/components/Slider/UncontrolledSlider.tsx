'use client';

import React from 'react';
import { type UncontrolledSliderProps } from '../../types';
import { SLIDER_DEFAULT_PROPS } from './constants';
import Slider from './Slider';
import { useSlider } from './useSlider';

const UncontrolledSlider = (props: UncontrolledSliderProps) => {
  const { value: propsValue, min } = props;
  const defaultValue = propsValue || min || SLIDER_DEFAULT_PROPS.min;
  const { value, onChange } = useSlider(defaultValue);

  return <Slider {...props} value={value} onChange={onChange} />;
};

UncontrolledSlider.spiritComponent = 'UncontrolledSlider';

export default UncontrolledSlider;
