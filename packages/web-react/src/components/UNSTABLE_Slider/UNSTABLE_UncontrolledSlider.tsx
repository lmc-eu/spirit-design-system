'use client';

import React from 'react';
import { UncontrolledSliderProps } from '../../types';
import { SLIDER_DEFAULT_PROPS } from './constants';
import UNSTABLE_Slider from './UNSTABLE_Slider';
import { useSlider } from './useSlider';

const UNSTABLE_UncontrolledSlider = (props: UncontrolledSliderProps) => {
  const { value: propsValue, min } = props;
  const defaultValue = propsValue || min || SLIDER_DEFAULT_PROPS.min;
  const { value, onChange } = useSlider(defaultValue);

  return <UNSTABLE_Slider {...props} value={value} onChange={onChange} />;
};

export default UNSTABLE_UncontrolledSlider;
