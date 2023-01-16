import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { SpiritTextFieldBaseProps } from '../../types';
import { useTextFieldBase } from './useTextFieldBase';
import { useTextFieldBaseStyleProps } from './useTextFieldBaseStyleProps';
import TextFieldBasePasswordToggle from './TextFieldBasePasswordToggle';
import TextFieldBaseInput from './TextFieldBaseInput';

export const TextFieldBase = (props: SpiritTextFieldBaseProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useTextFieldBaseStyleProps(props);
  const { hasPasswordToggle, id, isDisabled, isMultiline, isRequired, label, inputWidth, message, type, ...restProps } =
    modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const { inputType, passwordShown, passwordToggleHandler } = useTextFieldBase({
    hasPasswordToggle,
    isMultiline,
    type,
  });
  const inputProps = { ...otherProps, id, isDisabled, isMultiline, isRequired, inputWidth, label, type: inputType };
  const passwordToggleProps = {
    inputType,
    passwordShown,
    passwordToggleHandler,
  };

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      {hasPasswordToggle ? (
        <TextFieldBasePasswordToggle {...passwordToggleProps}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore TS2322 - Type 'string | number | readonly string[] | undefined' is not assignable to type 'string | number | undefined'. */}
          <TextFieldBaseInput {...inputProps} />
        </TextFieldBasePasswordToggle>
      ) : (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore TS2322 - Type 'string | number | readonly string[] | undefined' is not assignable to type 'string | number | undefined'.
        <TextFieldBaseInput {...inputProps} />
      )}
      {message && <div className={classProps.message}>{message}</div>}
    </div>
  );
};

export default TextFieldBase;
