import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritTextFieldBaseInputProps } from '../../types';
import { useTextFieldBaseInputStyleProps } from './useTextFieldBaseInputStyleProps';

export const TextFieldBaseInput = (props: SpiritTextFieldBaseInputProps) => {
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
    />
  );
};

export default TextFieldBaseInput;
