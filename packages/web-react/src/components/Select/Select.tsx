import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';
import { SpiritSelectProps } from '../../types';
import { useStyleProps } from '../../hooks';
import { useSelectStyleProps } from './useSelectStyleProps';
import { useValidationText } from '../Field';
import { Icon } from '../Icon';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Select'] }] */
const _Select = (props: SpiritSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const {
    children,
    validationState,
    validationText,
    id,
    isDisabled,
    isFluid,
    isRequired,
    isLabelHidden,
    label,
    helperText,
    ...restProps
  } = props;

  const { classProps } = useSelectStyleProps({ isDisabled, isFluid, isRequired, isLabelHidden, validationState });
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const renderValidationText = useValidationText({
    validationTextClassName: classProps.validationText,
    validationState,
    validationText,
  });

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <div className={classProps.container}>
        <select
          {...transferProps}
          id={id}
          className={classProps.input}
          ref={ref}
          disabled={isDisabled}
          required={isRequired}
        >
          {children}
        </select>
        <div className={classProps.icon}>
          <Icon name="chevron-down" />
        </div>
      </div>
      {helperText && <div className={classProps.helperText}>{helperText}</div>}
      {renderValidationText}
    </div>
  );
};

export const Select = forwardRef<HTMLSelectElement, SpiritSelectProps>(_Select);

export default Select;
