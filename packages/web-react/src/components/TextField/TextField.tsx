'use client';

import React, { type ForwardedRef, forwardRef } from 'react';
import { type SpiritTextFieldProps } from '../../types';
import { TextFieldBase } from '../TextFieldBase';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_TextField'] }] */
const _TextField = (props: SpiritTextFieldProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => (
  <TextFieldBase type="text" {...props} ref={ref} />
);

const TextField = forwardRef<HTMLInputElement, SpiritTextFieldProps>(_TextField);

TextField.spiritComponent = 'TextField';

export default TextField;
