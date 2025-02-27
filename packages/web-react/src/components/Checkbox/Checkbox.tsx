'use client';

import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritCheckboxProps } from '../../types';
import { HelperText, Label, ValidationText, useAriaIds } from '../Field';
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
  const { hasValidationIcon } = props;
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const [ids, register] = useAriaIds(ariaDescribedBy);
  const validationTextRole = useValidationTextRole({
    validationState,
    validationText,
  });

  return (
    <Label
      htmlFor={id}
      UNSAFE_style={styleProps.style}
      UNSAFE_className={classNames(classProps.root, styleProps.className)}
    >
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
        {validationState && (
          <ValidationText
            className={classProps.validationText}
            elementType="span"
            id={`${id}__validationText`}
            {...(hasValidationIcon && { hasValidationStateIcon: validationState })}
            validationText={validationText}
            registerAria={register}
            role={validationTextRole}
          />
        )}
      </span>
    </Label>
  );
};

const Checkbox = forwardRef<HTMLInputElement, SpiritCheckboxProps>(_Checkbox);

Checkbox.spiritComponent = 'Checkbox';

export default Checkbox;
