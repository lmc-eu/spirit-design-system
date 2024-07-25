'use client';

import React, { forwardRef, ForwardedRef } from 'react';
import { SpiritTextFieldProps } from '../../types';
import { TextFieldBase } from '../TextFieldBase';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_TextField'] }] */
const _TextField = (props: SpiritTextFieldProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return <TextFieldBase type="text" {...props} ref={ref} />;
};

export const TextField = forwardRef<HTMLInputElement, SpiritTextFieldProps>(_TextField);

export default TextField;
