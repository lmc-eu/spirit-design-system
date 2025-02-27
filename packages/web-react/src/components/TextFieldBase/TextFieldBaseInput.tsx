'use client';

import React, { forwardRef, ForwardedRef, RefObject } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritTextFieldBaseInputProps } from '../../types';
import { useTextFieldBaseInputStyleProps } from './useTextFieldBaseInputStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_TextFieldBaseInput'] }] */
const _TextFieldBaseInput = (
  props: SpiritTextFieldBaseInputProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
) => {
  const { classProps, props: modifiedProps } = useTextFieldBaseInputStyleProps(props);
  const { id, isDisabled, isMultiline, isRequired, inputWidth, type, ...restProps } = modifiedProps;
  const { props: otherProps } = useStyleProps(restProps);

  const ElementType: React.ElementType = isMultiline ? 'textarea' : 'input';
  const inputType = isMultiline ? undefined : type;

  return (
    <ElementType
      {...otherProps}
      className={classProps.input}
      disabled={isDisabled}
      id={id}
      required={isRequired}
      size={inputWidth}
      type={inputType}
      ref={ref as RefObject<HTMLInputElement & HTMLTextAreaElement>}
    />
  );
};

const TextFieldBaseInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, SpiritTextFieldBaseInputProps>(
  _TextFieldBaseInput,
);

TextFieldBaseInput.spiritComponent = 'TextFieldBaseInput';

export default TextFieldBaseInput;
