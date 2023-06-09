import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';
import { useStyleProps, useDeprecationMessage } from '../../hooks';
import { useValidationText } from '../Field';
import { SpiritTextFieldBaseProps, TextFieldBasePasswordToggleProps } from '../../types';
import { useTextFieldBaseStyleProps } from './useTextFieldBaseStyleProps';
import TextFieldBaseInput from './TextFieldBaseInput';
import withPasswordToggle from './withPasswordToggle';

const TextFieldBaseInputWithPasswordToggle = forwardRef(
  withPasswordToggle<TextFieldBasePasswordToggleProps>(TextFieldBaseInput),
);

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_TextFieldBase'] }] */
const _TextFieldBase = (props: SpiritTextFieldBaseProps, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {
  const { classProps, props: modifiedProps } = useTextFieldBaseStyleProps(props);
  const { id, label, message, helperText, validationState, ...restProps } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useDeprecationMessage({
    method: 'custom',
    trigger: !!(props?.message && !validationState),
    componentName: props?.isMultiline ? 'TextArea' : 'TextField',
    customText:
      '`message` prop without `validationState` prop will be unsupported in the next version. Use `helperText` instead.',
  });

  const renderValidationText = useValidationText({
    validationTextClassName: classProps.message,
    validationState,
    validationText: message,
    requireValidationState: false,
  });

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <TextFieldBaseInputWithPasswordToggle id={id} ref={ref} {...otherProps} />
      {helperText && <div className={classProps.helperText}>{helperText}</div>}
      {renderValidationText}
    </div>
  );
};

export const TextFieldBase = forwardRef<HTMLInputElement | HTMLTextAreaElement, SpiritTextFieldBaseProps>(
  _TextFieldBase,
);

export default TextFieldBase;
