'use client';

import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritRadioProps } from '../../types';
import { HelperText, Label, useAriaIds } from '../Field';
import { useRadioStyleProps } from './useRadioStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Radio'] }] */
const _Radio = (props: SpiritRadioProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const { classProps, props: modifiedProps } = useRadioStyleProps(props);
  const {
    'aria-describedby': ariaDescribedBy = '',
    helperText,
    id,
    isChecked,
    isDisabled,
    label,
    onChange,
    value,
    ...restProps
  } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const [ids, register] = useAriaIds(ariaDescribedBy);

  return (
    <Label
      htmlFor={id}
      UNSAFE_style={styleProps.style}
      UNSAFE_className={classNames(classProps.root, styleProps.className)}
    >
      <input
        {...otherProps}
        aria-describedby={ids.join(' ')}
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
        <Label elementType="span" UNSAFE_className={classProps.label}>
          {label}
        </Label>
        <HelperText
          className={classProps.helperText}
          elementType="span"
          id={`${id}__helperText`}
          registerAria={register}
          helperText={helperText}
        />
      </span>
    </Label>
  );
};

const Radio = forwardRef<HTMLInputElement, SpiritRadioProps>(_Radio);

export default Radio;
