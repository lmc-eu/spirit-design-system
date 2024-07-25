'use client';

import classNames from 'classnames';
import React, { ForwardedRef, forwardRef, useState } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritToggleProps } from '../../types';
import { HelperText, useAriaIds, ValidationText } from '../Field';
import { useToggleStyleProps } from './useToggleStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_UNSTABLE_Toggle'] }] */
/* eslint-disable-next-line camelcase */
const _UNSTABLE_Toggle = (props: SpiritToggleProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { classProps, props: modifiedProps } = useToggleStyleProps(props);
  const {
    'aria-describedby': ariaDescribedBy = '',
    id,
    isDisabled,
    isChecked = false,
    isRequired,
    label,
    helperText,
    onChange = () => {},
    validationState,
    validationText,
    ...restProps
  } = modifiedProps;

  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const [ids, register] = useAriaIds(ariaDescribedBy);
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange(event);
  };

  return (
    <label {...styleProps} htmlFor={id} className={classNames(classProps.root, styleProps.className)}>
      <span className={classProps.text}>
        <span className={classProps.label}>{label}</span>
        <HelperText
          className={classProps.helperText}
          elementType="span"
          id={`${id}__helperText`}
          registerAria={register}
          helperText={helperText}
        />
        {validationState && (
          <ValidationText
            className={classProps.validationText}
            id={`${id}__validationText`}
            validationText={validationText}
            registerAria={register}
          />
        )}
      </span>
      <input
        {...otherProps}
        aria-describedby={ids.join(' ')}
        type="checkbox"
        id={id}
        className={classProps.input}
        disabled={isDisabled}
        checked={checked}
        required={isRequired}
        onChange={handleOnChange}
        ref={ref}
      />
    </label>
  );
};

export const UNSTABLE_Toggle = forwardRef<HTMLInputElement, SpiritToggleProps>(_UNSTABLE_Toggle);

export default UNSTABLE_Toggle;
