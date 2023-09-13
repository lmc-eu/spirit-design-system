import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { SpiritRadioProps } from '../../types';
import { HelperText, useAriaIds } from '../Field';
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

  useDeprecationMessage({
    method: 'custom',
    trigger: !id,
    componentName: 'Radio',
    customText: 'The "id" property will be required instead of optional starting from the next major version.',
  });

  return (
    <label htmlFor={id} {...styleProps} className={classNames(classProps.root, styleProps.className)}>
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
        <span className={classProps.label}>{label}</span>
        <HelperText
          className={classProps.helperText}
          elementType="span"
          id={`${id}__helperText`}
          registerAria={register}
          helperText={helperText}
        />
      </span>
    </label>
  );
};

export const Radio = forwardRef<HTMLInputElement, SpiritRadioProps>(_Radio);

export default Radio;
