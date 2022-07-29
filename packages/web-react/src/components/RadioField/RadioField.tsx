import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritRadioFieldProps } from '../../types';
import { useRadioFieldStyleProps } from './useRadioFieldStyleProps';

export const RadioField = (props: SpiritRadioFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useRadioFieldStyleProps(props);
  const { id, label, value, isDisabled, isChecked, onChange, ...restProps } = modifiedProps;
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
      />
      <span className={classProps.label}>{label}</span>
    </label>
  );
};

export default RadioField;
