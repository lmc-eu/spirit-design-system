import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { SpiritRadioProps } from '../../types';
import { useRadioStyleProps } from './useRadioStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Radio'] }] */
const _Radio = (props: SpiritRadioProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const { classProps, props: modifiedProps } = useRadioStyleProps(props);
  const { id, label, helperText, value, isDisabled, isChecked, onChange, ...restProps } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <label htmlFor={id} {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <input
        {...otherProps}
        type="radio"
        id={id}
        className={classProps.input}
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
        value={value}
        ref={ref}
      />
      <span className={classProps.text}>
        <span className={classProps.label}>{label}</span>
        {helperText && <span className={classProps.helperText}>{helperText}</span>}
      </span>
    </label>
  );
};

export const Radio = forwardRef<HTMLInputElement, SpiritRadioProps>(_Radio);

export default Radio;
