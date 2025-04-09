'use client';

import classNames from 'classnames';
import React, { ForwardedRef, forwardRef, useState } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritToggleProps } from '../../types';
import { HelperText, Label, useAriaIds, ValidationText } from '../Field';
import { useValidationTextRole } from '../Field/useValidationTextRole';
import { useToggleStyleProps } from './useToggleStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Toggle'] }] */
/* eslint-disable-next-line camelcase */
const _Toggle = (props: SpiritToggleProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { classProps, props: modifiedProps } = useToggleStyleProps(props);
  const {
    'aria-describedby': ariaDescribedBy = '',
    hasValidationIcon,
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
  const validationTextRole = useValidationTextRole({
    validationState,
    validationText,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange(event);
  };

  return (
    <div style={styleProps.style} className={classNames(classProps.root, styleProps.className)}>
      <div className={classProps.text}>
        <Label UNSAFE_className={classProps.label} htmlFor={id}>
          {label}
        </Label>
        <HelperText
          UNSAFE_className={classProps.helperText}
          id={`${id}__helperText`}
          registerAria={register}
          helperText={helperText}
        />
        {validationState && (
          <ValidationText
            UNSAFE_className={classProps.validationText}
            {...(hasValidationIcon && { hasValidationStateIcon: validationState })}
            id={`${id}__validationText`}
            validationText={validationText}
            registerAria={register}
            role={validationTextRole}
          />
        )}
      </div>
      <input
        {...otherProps}
        {...(ids.length && { 'aria-describedby': ids.join(' ') })}
        type="checkbox"
        id={id}
        className={classProps.input}
        disabled={isDisabled}
        checked={checked}
        required={isRequired}
        onChange={handleOnChange}
        ref={ref}
      />
    </div>
  );
};

const Toggle = forwardRef<HTMLInputElement, SpiritToggleProps>(_Toggle);

Toggle.spiritComponent = 'Toggle';

export default Toggle;
