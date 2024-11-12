'use client';

import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritCheckboxProps } from '../../types';
import { HelperText, ValidationText, useAriaIds } from '../Field';
import { useValidationTextRole } from '../Field/useValidationTextRole';
import { useCheckboxStyleProps } from './useCheckboxStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Checkbox'] }] */
const _Checkbox = (props: SpiritCheckboxProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxStyleProps(props);
  const {
    'aria-describedby': ariaDescribedBy = '',
    helperText,
    id,
    isChecked,
    isDisabled,
    isRequired,
    label,
    validationState,
    validationText,
    value,
    ...restProps
  } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const [ids, register] = useAriaIds(ariaDescribedBy);
  const validationTextRole = useValidationTextRole({
    validationState,
    validationText,
  });

  return (
    <label {...styleProps} htmlFor={id} className={classNames(classProps.root, styleProps.className)}>
      <input
        {...otherProps}
        aria-describedby={ids.join(' ')}
        type="checkbox"
        id={id}
        className={classProps.input}
        disabled={isDisabled}
        required={isRequired}
        checked={isChecked}
        value={value}
        ref={ref}
      />
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
            elementType="span"
            id={`${id}__validationText`}
            validationText={validationText}
            registerAria={register}
            role={validationTextRole}
          />
        )}
      </span>
    </label>
  );
};

const Checkbox = forwardRef<HTMLInputElement, SpiritCheckboxProps>(_Checkbox);

export default Checkbox;
