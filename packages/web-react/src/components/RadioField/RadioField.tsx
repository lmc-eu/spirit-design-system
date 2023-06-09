import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { SpiritRadioFieldProps } from '../../types';
import { useRadioFieldStyleProps } from './useRadioFieldStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_RadioField'] }] */
const _RadioField = (props: SpiritRadioFieldProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const { classProps, props: modifiedProps } = useRadioFieldStyleProps(props);
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

export const RadioField = forwardRef<HTMLInputElement, SpiritRadioFieldProps>(_RadioField);

export default RadioField;
