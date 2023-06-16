import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { SpiritCheckboxFieldProps } from '../../types';
import { useValidationText } from '../Field';
import { useCheckboxFieldStyleProps } from './useCheckboxFieldStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_CheckboxField'] }] */
const _CheckboxField = (props: SpiritCheckboxFieldProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxFieldStyleProps(props);
  const {
    id,
    label,
    validationText,
    helperText,
    validationState,
    value,
    isDisabled,
    isRequired,
    isChecked,
    ...restProps
  } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const renderValidationText = useValidationText({
    validationTextClassName: classProps.validationText,
    validationState,
    validationText,
    validationElementType: 'span',
  });

  return (
    <label {...styleProps} htmlFor={id} className={classNames(classProps.root, styleProps.className)}>
      <input
        {...otherProps}
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
        {helperText && <span className={classProps.helperText}>{helperText}</span>}
        {renderValidationText}
      </span>
    </label>
  );
};

export const CheckboxField = forwardRef<HTMLInputElement, SpiritCheckboxFieldProps>(_CheckboxField);

export default CheckboxField;
